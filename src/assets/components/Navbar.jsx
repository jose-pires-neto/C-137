import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarCustom() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expand="lg" 
      className="navbar-custom mb-4" 
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      style={{
        backgroundColor: 'var(--space-black)',
        borderBottom: '3px solid var(--portal-green)'
      }}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="d-flex align-items-center" 
          onClick={() => setExpanded(false)}
          style={{
            fontFamily: "'Get Schwifty'",
            color: 'var(--portal-green) !important',
            fontSize: '1.8rem',
            textShadow: '0 0 10px var(--portal-blue)',
            transition: 'all 0.3s ease'
          }}
        >
          C-137<span style={{ color: 'var(--morty-yellow)' }}>Blog</span>
        </Navbar.Brand>
      
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          style={{
            borderColor: 'var(--portal-green)',
            color: 'white'
          }}
        >
          <span className="navbar-toggler-icon" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
          }}></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className="text-white mx-lg-2 my-1 my-lg-0"
              onClick={() => setExpanded(false)}
              style={{
                fontSize: '1.1rem',
                position: 'relative',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              activeClassName="active-nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className="text-white mx-lg-2 my-1 my-lg-0"
              onClick={() => setExpanded(false)}
              style={{
                fontSize: '1.1rem',
                position: 'relative',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              activeClassName="active-nav-link"
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className="text-white mx-lg-2 my-1 my-lg-0"
              onClick={() => setExpanded(false)}
              style={{
                fontSize: '1.1rem',
                position: 'relative',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              activeClassName="active-nav-link"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}