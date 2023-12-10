import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import Image from 'next/image';
import MetaMask from '../../components/ConnectMetaMask/MetaMask';
import { getAddress } from '../../backendConnector/ConnectWallet/connectWallet';
import { getCallAvailable } from '../../backendConnector/integration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [address, setAddress] = useState('');
  const [calls, setCalls] = useState('');

  const fetchAddress = async () => {
    const addressFromMetaMask = await getAddress();
    setAddress(addressFromMetaMask);
  };

  const fetchCalls = async () => {
    const addressFromMetaMask = await getCallAvailable();
    setCalls(addressFromMetaMask);
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    fetchCalls();
  }, [parseInt(calls?._hex)]);

  return (
    <>
      <header className="header">
        <Image src={Logo} alt="Logo" loading="lazy" width={50} height={50} />
        <div style={{ display: 'flex', gap: '20px' }}>
          <MetaMask />
          {address && (
            <>
              <button className="claim-free-trial-button">
                AVL Calls : {parseInt(calls?._hex) || 0}{' '}
                <FontAwesomeIcon icon={faFire} />
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
