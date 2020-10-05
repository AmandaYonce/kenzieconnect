import React, { Component } from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
  import Card from 'bootstrap'

class Header extends Component{


    render(){
        return(
        <>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Kenzie Konnect</NavbarBrand>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/profile/">Profile</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/messages/">Messages</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        </>
        )
    }
}

export default Header