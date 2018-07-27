import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = (props) => (
  <Navbar collapseOnSelect style={{marginBottom: 0}}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <Link to="/mlg">
          <NavItem >Machine Learning Guide</NavItem>
        </Link>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} onClick={props.open}>Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
