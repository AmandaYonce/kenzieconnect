import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import { StateContext } from "../App";
import logo from "../images/logo.png";
import { loggingOut } from "./actions";

const Header = (props) => {
  const { state, dispatch } = React.useContext(StateContext);
  const history = useHistory();
  // const handleAuth = (data) => {
  //   console.log(data);
  //   //backend call to possibly logout

  //   console.log(data);
  // };

  const handleLogOut = (e) => {
    e.preventDefault();
    // console.log("fired");
    loggingOut(dispatch);
    history.push("/");
  };
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <img alt="logo" src={logo} style={{ width: "5em" }} />
        <NavbarBrand href="/">Kenzie Connect</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/home/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={`/profile/${state.user}`}>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={`/messages/${state.user}`}>Pen Pal</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Button onClick={(e) => handleLogOut(e)}>Logout</Button>
    </React.Fragment>
  );
};

export default Header;
