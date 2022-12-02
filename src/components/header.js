import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {FormattedMessage} from 'react-intl';



function Header() {
  return (
    <Navbar expand="lg" variant="light" bg="blue">
      <Container>
        <Row>
        <Col> 
        <Navbar.Brand href="#"><FormattedMessage id="Musical Bands"/></Navbar.Brand>
      </Col>
      <Col> 
      </Col>
       </Row>
      </Container>
    </Navbar>
  );

}

export default Header;
