import React from "react";
import Header from "./header";
import { Card, Row } from "reactstrap";
import wink from "../images/wink.png";
import LandingCards from "./LandingCards";
import { StateContext } from "../App";
import { navigate } from "./actions";
import { getProfileData } from "./helpers";
import { useHistory } from "react-router-dom";
const Landing = (props) => {
  const { state, dispatch } = React.useContext(StateContext);

  const key = window.localStorage.getItem("key");
  const history = useHistory();
  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (history.action === "PUSH" || history.action === "POP") {
      getProfileData(key, dispatch, signal);
    }
    return () => controller.abort();
  }, [key, dispatch, history]);

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#888888", height: "1000px" }}>
        <Header />
        {state.page.start !== 0 && (
          <input
            type="button"
            value="Back"
            onClick={() => dispatch(navigate(-3))}
          />
        )}
        {state.page.end < state.users.length && (
          <input
            type="button"
            value="Next"
            onClick={() => dispatch(navigate(3))}
          />
        )}
        <Row style={{ margin: "0.5em" }}>
          <Card id="slide">
            <a className="notifText" href={`/messagefeed/`}>
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
          <LandingCards />
        </Row>
      </div>
    </React.Fragment>
  );
};
export { Landing as Home };
