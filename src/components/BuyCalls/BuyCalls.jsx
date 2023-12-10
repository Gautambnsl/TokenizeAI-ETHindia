import { GET_USDC_DATA } from '../../layout/Header/usdcQuery';
import { getAddress } from '../../backendConnector/ConnectWallet/connectWallet';
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import {
  buy20CallsFunction,
  buy140CallsFunction,
  buy50CallsFunction,
} from '../../backendConnector/integration';

const BuyCalls = () => {
  const [address, setAddress] = useState('');

  const { data } = useQuery(GET_USDC_DATA, {
    variables: { _eq: `${address}` },
    skip: !address,
  });

  const fetchAddress = async () => {
    const addressFromMetaMask = await getAddress();
    setAddress(addressFromMetaMask);
  };

  useEffect(() => {
    fetchAddress();
  }, []);
  return (
    <>
      <Container>
        <h2 className="text-center mt-5 mb-4">Choose a Subscription Plan</h2>
        <span className="fw-bold">
          USDC Account: {data?.Polygon?.formattedAmount || '$0.0'}
        </span>
        <Row>
          <Col sm="12" md="6" lg="4" xl="4" className="responsive-card">
            <div className="subscription-card p-30 body">
              <h5 className="c-black mb-0 fw-600 text-truncate text-center">
                Promt Calls Beginner
              </h5>
              <hr />
              <div className="row">
                <div className="d-flex flex-column gap-3 mt-20">
                  <ul>
                    <li>20 Prompts</li>
                    <li>$0.2 per prompt</li>
                    <li>Basic Support</li>
                  </ul>
                </div>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ marginBottom: '20px' }}
              >
                <button
                  onClick={buy20CallsFunction}
                  className="subscribe-button mt-3"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="4" className="responsive-card">
            <div className="subscription-card p-30 body">
              <h5 className="c-black mb-0 fw-600 text-truncate text-center">
                Promt Calls Plus
              </h5>
              <hr />
              <div className="row">
                <div className="d-flex flex-column gap-3 mt-20">
                  <ul>
                    <li>50 Prompts</li>
                    <li>$0.4 per prompt</li>
                    <li>Premium Support</li>
                  </ul>
                </div>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ marginBottom: '20px' }}
              >
                <button
                  onClick={buy50CallsFunction}
                  className="subscribe-button mt-3"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="4" className="responsive-card">
            <div className="subscription-card p-30 body">
              <h5 className="c-black mb-0 fw-600 text-truncate text-center">
                Promt Calls Pro
              </h5>
              <hr />
              <div className="row">
                <div className="d-flex flex-column gap-3 mt-20">
                  <ul>
                    <li>140 Prompts</li>
                    <li>$1 per prompt</li>
                    <li>Premium Plus Support</li>
                  </ul>
                </div>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ marginBottom: '20px' }}
              >
                <button
                  onClick={buy140CallsFunction}
                  className="subscribe-button mt-3"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BuyCalls;
