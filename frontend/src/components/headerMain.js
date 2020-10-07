import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from '../images/logo.png'


const HeaderMain = (props) => (
  <React.Fragment>
    <Navbar color="light" light expand="md">
      <img alt="logo" src={logo} style={{width: "5em"}}/>
      <NavbarBrand href="/">Kenzie Connect</NavbarBrand>
    </Navbar>
  </React.Fragment>
);

export default HeaderMain;
