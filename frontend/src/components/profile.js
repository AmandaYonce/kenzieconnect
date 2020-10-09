import React from "react";
import Header from "./header";
import { CardBody, Card, Col, Row, CardText } from "reactstrap";
import { StateContext } from "../App";
import placeholder from "../images/placeholder.png";
import Tips from "./tips";

const Profile = (props) => {
  const { state } = React.useContext(StateContext);
  return (
      <div style={{ backgroundColor: "#4a5066", height: "1000px" }}>
      <Header />
      <h1 class="profile">Your Profile</h1>
      <Row style={{ width: "60em", margin: "5em" }}>
        <Col>
          <Card
        style={{
          width: "25em",
          margin: "0 auto",
          boxShadow: "5px 10px 2px #888888",
        }}
      >
        <CardBody>
          <Row style={{ textAlign: "center" }}>
            <img
              alt="profilepic"
              src={placeholder}
              style={{ width: "10em", paddingRight: "1em", fontFamily: "Montserrat", }}
            />
          </Row>
          <CardText>Name:{state.user}</CardText>
          <CardText>Age:</CardText>
          <CardText>Gender:</CardText>
          <CardText>Sexual Preference:</CardText>
          <CardText>Bio:</CardText>
        </CardBody>
      </Card>

        </Col>
        <Col>
        <Tips/>
          </Col>
      </Row>
    </div>
  );
};

export default Profile;
