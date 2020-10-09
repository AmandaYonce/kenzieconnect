import React from "react";
import Header from "./header";
import { CardBody, Card, Col, Row, CardText, Button } from "reactstrap";
import { StateContext } from "../App";
import placeholder from "../images/placeholder.png";
import Tips from "./tips";

const Profile = (props) => {
  const { state } = React.useContext(StateContext);
  return (
      <div style={{ backgroundColor: "#4a5066", height: "1000px"}}>
      <Header />
      <h1 class="profile">Your Profile</h1>
      <div></div>
      <Row style={{ width: "60em", marginTop: "2.5em", marginLeft: "auto", marginRight: "auto"}}>
        <Col col-6 >
          <Card
        style={{
          width: "25em",
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
        {/* I don't know how we exactly we want to handle this but I definitely 
        think it would be nice if we had some way to for the user to edit their profile */}
          <Button size="lg" style={{marginTop: "2em"}}>Edit Profile</Button>
        </Col>
        <Col col-6>
        <Tips/>
          </Col>
      </Row>
    </div>
  );
};

export default Profile;
