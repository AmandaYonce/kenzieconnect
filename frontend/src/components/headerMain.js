import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../images/logo.png";

const HeaderMain = (props) => (
  <React.Fragment>
    <Navbar color="light" light expand="md">
      <img alt="logo" src={logo} style={{ width: "5em" }} />
      <NavbarBrand style={{fontSize: "3em", color: '#232839', fontFamily: 'Lobster'}} href="/">Kenzie Connect</NavbarBrand>
    </Navbar>
  </React.Fragment>
);

export default HeaderMain;
