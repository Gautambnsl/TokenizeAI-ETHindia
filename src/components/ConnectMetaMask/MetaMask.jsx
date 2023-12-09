import { getData } from '../../backendConnector/MetaMask/getGasData';
import {
  connectWallet,
  getAddress,
} from '../../backendConnector/ConnectWallet/connectWallet';
import React, { useEffect, useState } from 'react';

const MetaMask = () => {
  const [address, setAddress] = useState('');

  useEffect(async () => {
    const addressFromMetaMask = await getAddress();
    setAddress(addressFromMetaMask);
  }, []);

  return (
    <>
      <button className="meta-mask-button" onClick={connectWallet}>
        <img
          src="https://storage.googleapis.com/ethglobal-api-production/organizations%2F4pn9u%2Flogo%2F1679944522371_2Ubgzfgg_400x400.jpeg"
          alt="MetaMask"
          loading="lazy"
          width={25}
          height={25}
        />
        <p className="text">{address ? `${address.substring(0,4)}...${address.slice(-4)}` : 'Connect Wallet'}</p>
      </button>
      {/* <button className="button" onClick={getData}>Gas</button> */}
    </>
  );
};

export default MetaMask;
