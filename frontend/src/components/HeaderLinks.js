import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { StateContext } from "../App";

const HeaderLinks = (props) => {
  const { state } = React.useContext(StateContext);

  const home = { href: "/home/", name: "Home" };
  const profile = { href: `/profile/${state.user}`, name: "Profile" };
  const penPal = { href: `/messages/${state.user}`, name: "Penpal" };

  const headerRoutes = [home, profile, penPal];

  return headerRoutes.map((value, index) => (
    <Nav className="mr-auto" navbar key={index}>
      <NavItem style={{ paddingLeft: "1em" }}>
        <NavLink
          className="navlink"
          style={{ fontSize: "2em", fontFamily: "Dosis", color: "#232839" }}
          href={value.href}
        >
          {value.name}
        </NavLink>
      </NavItem>
    </Nav>
  ));
};

export default HeaderLinks;
