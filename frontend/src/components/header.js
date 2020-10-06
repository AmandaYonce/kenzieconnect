import React, { Component } from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

class Header extends Component{


    render(){
        return(
        <>
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
            </Nav>
        </Navbar>
        </>
        )
    }
}

export default Header