import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  const handleRedirect = (pathName) => {
    if (pathName === '/') {
      router.push({
        query: { tabName: '' },
      });
    }

    if (pathName === '/pushProtocol') {
      router.push({
        query: { tabName: 'PushProtocol' },
      });
    }

    if (pathName === '/wakuProtocol') {
      router.push({
        query: { tabName: 'WakuProtocol' },
      });
    }

    if (pathName === '/free-trial') {
      router.push({
        query: { tabName: 'FreeTrial' },
      });
    }

    if (pathName === '/buy-calls') {
      router.push({
        query: { tabName: 'BuyCalls' },
      });
    }

    if (pathName === '/usdt-pool') {
      router.push({
        query: { tabName: 'UsdtPool' },
      });
    }

    if (pathName === '/xmtp-invites') {
      router.push({
        query: { tabName: 'XMTPInvites' },
      });
    }
  };

  return (
    <>
      <nav className="navbar-main">
        <div className="navbar-div">
          <div onClick={() => handleRedirect('/')} className="navbar-a">
            <p className="navbar-text">Home</p>
          </div>
        </div>
        <hr className="navbar-border" />
        <div className="navbar-div">
          {/* <div
            onClick={() => handleRedirect('/pushProtocol')}
            className="navbar-a"
          >
            <img
              src="https://storage.googleapis.com/ethglobal-api-production/organizations%2F10a1v%2Flogo%2F1664802172170_aiOxYOJI_400x400.jpeg"
              alt="pushProtocol"
              loading="lazy"
              className="navbar-icon"
            />
            <p className="navbar-text">Push Protocol</p>
          </div> */}
          <div
            onClick={() => handleRedirect('/usdt-pool')}
            className="navbar-a"
          >
            <p className="navbar-text">
              <img
                src="https://storage.googleapis.com/ethglobal-api-production/organizations%2Fif0ri%2Flogo%2F1675803570272_mhT50NcT_400x400.jpeg"
                alt="1inch"
                width={30}
                height={30}
                style={{ borderRadius: '50%' }}
                loading="lazy"
              />{' '}
              USDC Pool
            </p>
          </div>
          <div
            onClick={() => handleRedirect('/free-trial')}
            className="navbar-a"
          >
            <p className="navbar-text">Get Free Trial</p>
          </div>
          <div
            onClick={() => handleRedirect('/buy-calls')}
            className="navbar-a"
          >
            <p className="navbar-text">Buy Calls</p>
          </div>
          <div
            onClick={() => handleRedirect('/xmtp-invites')}
            className="navbar-a"
          >
            <p className="navbar-text">XMTP Invites</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
