import React from 'react';
import { useRouter } from 'next/router';
import PushUI from '../PushUI/PushUI';
import WakuUI from '../Waku/Waku';
import Main from '../Main';
import FreeTrial from '../../components/FreeTrial/freeTrial';
import BuyCalls from '../../components/BuyCalls/BuyCalls';
import UsdtPool from '../../components/UsdtPool/UsdtPool';

const MainSection = () => {
  const router = useRouter();
  const { tabName } = router.query;

  const tabHandler = (tabName) => {
    if (tabName === 'PushProtocol') {
      return <PushUI />;
    } else if (tabName === 'WakuProtocol') {
      return <WakuUI />;
    } else if (tabName === 'FreeTrial') {
      return <FreeTrial />;
    } else if (tabName === 'BuyCalls') {
      return <BuyCalls />;
    } else if (tabName === 'UsdtPool') {
      return <UsdtPool />;
    } else {
      return <Main />;
    }
  };
  return (
    <>
      <div className="main-section">
        {tabHandler(tabName)}
      </div>
    </>
  );
};

export default MainSection;
