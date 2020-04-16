import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar expand={'md'} bg={'dark'} variant={'dark'}>
      <Container fluid>
        <Navbar.Brand style={{ color: 'tomato', fontSize: 36 }} as={Link} to='/'>
          Pupster
        </Navbar.Brand>
        {/* button for mobile nav */}
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav navbar className='ml-auto'>
            <Nav.Link style={{ fontSize: 24 }} as={Link} to='/'>
              About
            </Nav.Link>
            <Nav.Link style={{ fontSize: 24 }} as={Link} to='/discover'>
              Discover
            </Nav.Link>
            <Nav.Link style={{ fontSize: 24 }} as={Link} to='/search'>
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
