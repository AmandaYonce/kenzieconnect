import React from "react";
import { CardBody, Card, Col, Row, CardText } from "reactstrap";
import placeholder from "../images/placeholder.png";
import logo from "../images/logo.png";
import wink from '../images/wink.png'
const LandingCards = (props) => {
  //map three random mathes here from fetch
  const test = [
    {
      name: "bob",
      age: 34,
      gender: "boy",
      preference: "women",
      bio: "i love cats",
    },
    {
      name: "sue",
      age: 50,
      gender: "woman",
      preference: "men",
      bio: "i love sports",
    },
    {
      name: "liz",
      age: 45,
      gender: "woman",
      preference: "men",
      bio: "i love dogs",
    },
  ];
  return test.map((value, index) => (
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
            <h1 style={{ fontFamily: "Montserrat", fontSize: "2.5em" }}>
              90% <br />
              Match
              <br/>
              {/* when the user clicks on this icon it should trigger a wink */}
              <img alt="wink" style={{width: "2em"}} src={wink}/>
            </h1>
            
          </Row>
          <CardText>Name:{value.name}</CardText>
          <CardText>Age:{value.age}</CardText>
          <CardText>Gender:{value.gender}</CardText>
          <CardText>Sexual Preference:{value.preference}</CardText>
          <CardText>Bio:{value.bio}</CardText>
        </CardBody>
      </Card>
      </div>
          <div className="flip-card-front">
          <Card style={{ width: "20em", height: "100%", margin: "0 auto"}}>
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
  ));
};

export default LandingCards;
