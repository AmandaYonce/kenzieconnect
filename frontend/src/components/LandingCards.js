import React from "react";
import { CardBody, Card, Col, Row, CardText } from "reactstrap";
import placeholder from "../images/placeholder.png";
import logo from "../images/logo.png";
import wink from "../images/wink.png";
import { getData, getProfileData, matchMaker } from "./helpers";
import { receiveUsers, getMatchScores } from "./actions";
import { StateContext } from "../App";
import { useHistory } from "react-router-dom";
const LandingCards = (props) => {
  const { state, dispatch } = React.useContext(StateContext);
  const usersUrl = "http://127.0.0.1:8000/users/";
  let key = window.localStorage.getItem("key");
  const history = useHistory();

  // console.log(state.users ?? "noboby")
  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (history.action === "POP" || history.action === "PUSH") {
      (async () => {
        let b = await getProfileData(key, dispatch, signal);
        let a = await getData(usersUrl, dispatch, receiveUsers, signal);
        const matchScores = await matchMaker(a, b);
        // console.log(matchScores);
        try {
          dispatch(getMatchScores(matchScores));
        } catch (error) {
          console.error(error);
        }
      })();
    }
    return () => controller.abort();
  }, [key, dispatch, history]);

  const users = state.users
    .filter((e) => e.email !== state.profile[0].email)
    .map((value, index) => {
      return (
        <Col col-3="true" key={index}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-back">
                <Card
                  style={{
                    width: "20em",
                    margin: "0 auto",
                    boxShadow: "5px 10px 2px #4a5066",
                  }}
                >
                  <CardBody>
                    <Row style={{ textAlign: "center" }}>
                      <img
                        alt="prfoilepic"
                        src={placeholder}
                        style={{ width: "10em", paddingRight: "1em" }}
                      />
                      <h1
                        style={{ fontFamily: "Montserrat", fontSize: "2.5em" }}
                      >
                        {((state.matchScores[index] / 9) * 100).toFixed(1)}%{" "}
                        <br />
                        Match
                        <br />
                        {/* when the user clicks on this icon it should trigger a wink */}
                        <img alt="wink" style={{ width: "2em" }} src={wink} />
                      </h1>
                    </Row>
                    <CardText>Name:{value.displayname}</CardText>
                    <CardText>Age:{value.age}</CardText>
                    <CardText>Gender:{value.gender}</CardText>
                    <CardText>
                      Sexual Preference:{value.sexual_preference}
                    </CardText>
                    <CardText>Bio:{value.bio}</CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="flip-card-front">
                <Card
                  style={{ width: "20em", height: "100%", margin: "0 auto" }}
                >
                  <CardBody>
                    <Row style={{ alignItems: "center" }}>
                      <img alt="logo" src={logo} style={{ width: "19.7em" }} />
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </Col>
      );
    });

  return users.slice(state.page.start, state.page.end);
};

export default LandingCards;
