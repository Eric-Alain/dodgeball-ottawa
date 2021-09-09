import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='justify-content-around'>
          <Col xs='12' sm='6' lg="8" className='mb-4'>
            <h3>Dodgeball Ottawa</h3>
            <p>
              100 Brookfield Road
              <br />
              Ottawa, ON K1V6J1
              <br />
              Canada
            </p>
            <p>
              <Link to='/contact'>Contact us</Link>
            </p>
          </Col>
          <Col xs='12' sm='auto' className='mb-4'>
            <h3>Follow</h3>
            <p>
              <a href='#a'>Facebook</a>
              <br />
              <a href='#a'>Instagram</a>
              <br />
              <a href='#a'>Twitter</a>
              <br />
              <a href='#a'>Youtube</a>
            </p>
          </Col>
          <Col xs='12' sm='auto' className='mb-4'>
            <h3>Related</h3>
            <p>
              <a href='#a'>Dodgeball Canada</a>
              <br />
              <a href='#a'>Dodgeball Ontario</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer