import { getSigner } from '../../backendConnector/integration';
import React, { useEffect, useRef, useState } from 'react';
import { Client } from '@xmtp/xmtp-js';
import {
  isValidAddress,
  useCanMessage,
  useSendMessage,
  useStartConversation,
} from '@xmtp/react-sdk';
import { Wallet } from 'ethers';

const BOT_ADDRESS = '0x937C0d4a6294cdfa575de17382c7076b579DC176';

const XMTPInvites = () => {
  const [messages, setMessages] = useState(null);
  const [signer, setSigner] = useState('');
  const convRef = useRef(null);
  const clientRef = useRef(null);
  const isConnected = !!signer;
  const [isOnNetwork, setIsOnNetwork] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const { sendMessage } = useSendMessage();
  const { startConversation } = useStartConversation();

  useEffect(async () => {
    let signerData = await getSigner();
    setSigner(signerData);
  }, []);

  const initXmtp = async function () {
    const startConvo = async (contactToInit) => {
      const xmtp = await Client.create(signer, { env: 'production' });
      newConversation(xmtp, contactToInit.address);
      setIsOnNetwork(!!xmtp.address);
      clientRef.current = xmtp;
    };

    if (selectedContact) {
      startConvo(selectedContact);
    } else {
      startConvo({ address: BOT_ADDRESS });
    }
  };

  const newConversation = async function (xmtp_client, addressTo) {
    if (await xmtp_client?.canMessage(addressTo)) {
      const conversation = await xmtp_client.conversations.newConversation(
        addressTo
      );
      convRef.current = conversation;
      const messages = await conversation.messages();
      setMessages(messages);
    } else {
      alert(
        "The contact you searched for can't be messaged because they are not on the xmtp network."
      );
    }
  };

  useEffect(() => {
    const startConvo = async () => {
      const xmtp = await Client.create(signer, { env: 'dev' });
      newConversation(xmtp, selectedContact.address);
      setIsOnNetwork(!!xmtp.address);
      clientRef.current = xmtp;
    };

    if (selectedContact) {
      startConvo();
    }
  }, [selectedContact]);

  const handleInputChange = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    } else {
      setInputValue(event.target.value);
    }
  };

  const onSendMessage = async () => {
    try {
      const wallet = Wallet.createRandom();
      console.log('wallet', wallet);
      const xmtp = await Client.create(wallet);
      console.log('xmtp', xmtp);
      const conversation = await xmtp.conversations.newConversation(inputValue);
      console.log('conversation', conversation);
      const xmtpinvitation = await conversation.send('Use TokenizeAI and gets 10 prompts free');
      console.log('xmtpinvitation', xmtpinvitation);
    } catch (err) {
      console.log('err', err);
    }
  };

  const handleSend = async () => {
    if (isValidAddress(inputValue)) {
      console.log('validated');
      await onSendMessage();
      setInputValue('');
    }
  };

  return (
    <>
      {isConnected && !isOnNetwork && (
        <div>
          <button className="claim-free-trial-button" onClick={initXmtp}>
            Connect to XMTP
          </button>
        </div>
      )}
      {isConnected && isOnNetwork && (
        <form>
          <div className="input-group">
            <input
              type="text"
              placeholder="Type a User Address..."
              className="input"
              autoComplete="off"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={handleSend} className="send-button">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Invite</span>
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default XMTPInvites;
