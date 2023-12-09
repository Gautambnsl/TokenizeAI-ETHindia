import LoginButton from '../../button/LoginButton/LoginButton';
import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const FreeTrial = () => {
  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-center mt-3">
          <Col md="6" className="mt-3">
            <Card className="free-trial-card">
              <h5>You should be the citizen of India</h5>
              <CardBody className="p-5">
                <LoginButton />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FreeTrial;
