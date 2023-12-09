import React from 'react';
import Logo from '../../assets/images/logo.png';
import Image from 'next/image';
import LoginButton from '../../button/LoginButton/LoginButton';
import MetaMask from '../../components/ConnectMetaMask/MetaMask';

const Header = () => {
  return (
    <>
      <header className="header">
        <Image src={Logo} alt="Logo" loading="lazy" width={50} height={50} />
        <div style={{ display: 'flex', gap: '20px' }}>
          <LoginButton />
          <MetaMask />
        </div>
      </header>
    </>
  );
};

export default Header;
