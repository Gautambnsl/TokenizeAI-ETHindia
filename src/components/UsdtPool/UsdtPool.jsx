import React from 'react';
import { Button, Container, Row, Col, Card, CardBody } from 'reactstrap';

const UsdtPool = () => {
  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-center mt-3">
          <Col md="6" className="mt-3">
            <Card style={{ boxShadow: '0 0 5px #073d83' }}>
              <CardBody className="p-5">
                <div className="position-relative w-100">
                  <div className="file-upload p-3">
                    <div className="d-flex flex-column w-100 justify-content-between">
                      <div className="d-flex flex-row justify-content-between h-100 font-14">
                        <span className="c-gray">You Pay</span>
                        <div className="swap-card">
                          <img
                            src="https://storage.googleapis.com/ethglobal-api-production/organizations%2F536ub%2Fimages%2FWhite%20on%20Gradient%20Square.png"
                            loading="lazy"
                            alt="Polygon"
                          />
                          <span className="c-gray font-14">Polygon</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between h-100">
                        <span
                          className="c-gray"
                          style={{
                            fontSize: '20px',
                            lineHeight: '20px',
                            fontWeight: '700',
                          }}
                        >
                          10 EDX
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="file-upload p-3 mt-3">
                    <div className="d-flex flex-column w-100 justify-content-between">
                      <div className="d-flex flex-row justify-content-between h-100 font-14">
                        <span className="c-gray">You receive</span>
                        <div className="swap-card">
                          <img
                            src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
                            loading="lazy"
                            alt="USDT"
                          />
                          <span className="c-gray font-14">USDT</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between h-100">
                        <span
                          className="c-gray"
                          style={{
                            fontSize: '20px',
                            lineHeight: '20px',
                            fontWeight: '700',
                          }}
                        >
                          10 EDX
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-100 mt-3 font-16 text-decoration-none button-main">
                    Buy
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UsdtPool;
