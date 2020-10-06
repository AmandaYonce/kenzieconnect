import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = (props) => (
  <React.Fragment>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Kenzie Konnect</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/home/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/profile/:username">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/messages/:username">Messages</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Logout</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </React.Fragment>
);

export default Header;
