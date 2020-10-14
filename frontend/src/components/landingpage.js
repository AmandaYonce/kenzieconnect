import React from "react";
import Header from "./header";
import { Card, Row } from "reactstrap";
import wink from "../images/wink.png";
import LandingCards from "./LandingCards";
import { StateContext } from "../App";

// import { useLocation } from "react-router-dom";

const Landing = (props) => {
  const { state } = React.useContext(StateContext);
  const [page, setPage] = React.useState({ start: 0, end: 6 });
  const navigate = (value) => {
    if (page.start + value <= state.users.length && page.start + value >= 0) {
      setPage({...page,start:page.start+value, end:page.end+value});
    }
  };
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#888888", height: "1000px" }}>
        <Header />
    <input type="button" value="Back" onClick={() => navigate(-6)} />
    <input type="button" value="Next" onClick={() => navigate(6)} />
        <Row style={{ margin: "0.5em" }}>
          <Card id="slide">
            <a className="notifText" href={`/messagefeed/${state.username}`}>
              You have 4 New Messages
            </a>
          </Card>
        </Row>
        <Row style={{ margin: "0.5em" }}>
          <Card id="winkslide">
            You have 3 winks
            <img alt="wink" src={wink} style={{ width: "4em" }} />
          </Card>
        </Row>
        <Row
          style={{ justifyContent: "center", marginTop: "3.5em" }}
          row-12="true"
        >
          <h1
            style={{
              fontFamily: "Montserrat",
              fontSize: "3.5em",
              color: "whitesmoke",
              textShadow: "-3px 1px 0 #000",
            }}
          >
            Your Daily Matches
          </h1>
        </Row>

        <Row style={{ margin: "4em" }} row-12="true">
          <LandingCards page={page} />
        </Row>
      </div>
    </React.Fragment>
  );
};
export { Landing as Home };
