import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/dball-header-no-bg.png';
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const NavbarHeader = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='white'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img width='120px' height='auto' className='img-responsive' src={logo} alt='DBO logo' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
          <Row>
            <Col xs='12'>
              <Nav className='justify-content-end site-menu'>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
                <NavDropdown title='Leagues' id='leagues-dropdown' renderMenuOnMount={true}>
                  <Link to='/leagues/drop-in' className='dropdown-item'>
                    Drop-in
                  </Link>
                </NavDropdown>
                <Link to='/registrations' className='nav-link'>
                  Registrations
                </Link>
                <NavDropdown title='Technical' id='technical-dropdown' renderMenuOnMount={true}>
                  <Link to='/technical/rules-and-reffing' className='dropdown-item'>
                    Rules and reffing
                  </Link>
                  <Link to='/technical/bylaws' className='dropdown-item'>
                    Bylaws
                  </Link>
                  <Link to='/technical/dbo-tips' className='dropdown-item'>
                    DBO Tips
                  </Link>
                  <Link to='/technical/membership' className='dropdown-item'>
                    Membership
                  </Link>
                  <Link to='/technical/covid-19-protocol' className='dropdown-item'>
                    COVID-19 Protocol
                  </Link>
                </NavDropdown>
                <Link to='/events' className='nav-link'>
                  Events
                </Link>
                <Link to='/galleries' className='nav-link'>
                  Galleries
                </Link>
                <Link to='/contact' className='nav-link'>
                  Contact
                </Link>
              </Nav>
            </Col>
            <Col xs='12'>
              <Nav className='justify-content-end'>
                <Nav.Link href='https://www.facebook.com/DodgeballOttawa/'>
                  <FontAwesomeIcon icon={faFacebook} size='lg' />
                </Nav.Link>
                <Nav.Link href='https://www.instagram.com/dodgeballottawa/'>
                  <FontAwesomeIcon icon={faInstagram} size='lg' />
                </Nav.Link>
                <Nav.Link href='https://twitter.com/dodgeballottawa'>
                  <FontAwesomeIcon icon={faTwitter} size='lg' />
                </Nav.Link>
                <Nav.Link href='https://www.youtube.com/c/Dodgeballottawa'>
                  <FontAwesomeIcon icon={faYoutube} size='lg' />
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
