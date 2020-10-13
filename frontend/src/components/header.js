import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { StateContext } from "../App";
import logo from "../images/logo.png";
import { loginOrOut } from "./actions";
import "../nav.css";
import HeaderLinks from "./HeaderLinks";

const Header = (props) => {
  const { dispatch } = React.useContext(StateContext);
  const history = useHistory();
  // const handleAuth = (data) => {
  //   console.log(data);
  //   //backend call to possibly logout

  //   console.log(data);
  // };

  const handleLogOut = async(e) => {
    e.preventDefault();
    // console.log("fired");
    const logoutURL= 'http://127.0.0.1:8000/rest-auth/logout/'
    const response = await fetch(logoutURL)
    if (response.ok){
      dispatch(loginOrOut());
      localStorage.clear();
      history.push("/");
    }
  };
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <img alt="logo" src={logo} style={{ width: "5em" }} />
        <NavbarBrand
          style={{ fontSize: "3em", color: "#232839", fontFamily: "Lobster" }}
          href="/"
        >
          Kenzie Connect
        </NavbarBrand>
        <HeaderLinks />
        <Button onClick={(e) => handleLogOut(e)}>Logout</Button>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
