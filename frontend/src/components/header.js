import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from '../images/logo.png'


const Header = (props) => (
  <React.Fragment>
    <Navbar color="light" light expand="md">
      <img alt="logo" src={logo} style={{width: "5em"}}/>
      <NavbarBrand href="/">Kenzie Connect</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/home/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/profile/:username">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/messages/:username">Pen Pal</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Logout</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </React.Fragment>
);

export default Header;
