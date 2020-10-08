import React from "react";
import Header from "./header";
import { CardBody, Card, Col, Row, CardText } from "reactstrap";
import placeholder from '../images/placeholder.png'

const Landing = (props) => {
  return (
    <React.Fragment >
      <div style={{backgroundColor: "#888888", height: "1000px"}}>
      <Header />

      <Row style={{ margin: '0.5em' }}>
        <Card id="slide">
          <a class="notifText" href="/messagefeed/:username">You have 4 New Messages</a>
        </Card>
      </Row>

      <Row style={{ justifyContent: "center", marginTop: "3.5em"}} row-12>
          <h1 style={{fontFamily: 'Montserrat', fontSize: "3.5em", color: "whitesmoke", textShadow: '-3px 1px 0 #000'}}>Your Daily Matches</h1>
      </Row>
      <Row style={{ margin: "2em" }} row-12>
        
        <Col col-3>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-back">
                <Card style={{ width: "20em", margin: "0 auto", boxShadow: "5px 10px 2px #4a5066"}}>
                  <CardBody>
                    <Row style={{ textAlign: "center" }}>
                      <img alt="prfoilepic" src={placeholder} style={{width: '10em', paddingRight: "1em"}}/>
                      <h1 style={{fontFamily: 'Montserrat', fontSize: "2.5em"}}>90% <br/>Match</h1>
                    </Row>
                    <CardText>Name:</CardText>
                    <CardText>Age:</CardText>
                    <CardText>Gender:</CardText>
                    <CardText>Sexual Preference:</CardText>
                    <CardText>Bio:</CardText>
                  </CardBody>
                </Card>
                </div>
              <div class="flip-card-front">
              {/* <Card style={{ width: "20em", height: "100%", margin: "0 auto"}}>
                  <CardBody>
                    <Row style={{ textAlign: "center" }}>
                      <h1 style={{fontFamily: 'Montserrat', fontSize: "2.5em"}}>Hover To Connect With Your 90% Match</h1>
                    </Row>
                  </CardBody>
                </Card> */}

              </div>
          </div>
          </div>
        </Col>
        <Col col-3>
          <Card style={{ width: "20em", margin: "0 auto", boxShadow: "5px 10px 2px #4a5066"}}>
            <CardBody>
              <Row style={{ textAlign: "center" }}>
                <img alt="prfoilepic" src={placeholder} style={{width: '10em', paddingRight: "1em"}}/>
                <h1 style={{fontFamily: 'Montserrat', fontSize: "2.5em"}}>80% <br/>Match</h1>
              </Row>
              <CardText>Name:</CardText>
              <CardText>Age:</CardText>
              <CardText>Gender:</CardText>
              <CardText>Sexual Preference:</CardText>
              <CardText>Bio:</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col col-3>
          <Card style={{ width: "20em", margin: "0 auto", boxShadow: "5px 10px 2px #4a5066" }}>
            <CardBody>
              <Row style={{ textAlign: "center" }}>
                <img alt="prfoilepic" src={placeholder} style={{width: '10em', paddingRight: "1em"}}/>
                <h1 style={{fontFamily: 'Montserrat', fontSize: "2.5em"}}>70% <br/>Match</h1>
              </Row>
              <CardText>Name:</CardText>
              <CardText>Age:</CardText>
              <CardText>Gender:</CardText>
              <CardText>Sexual Preference:</CardText>
              <CardText>Bio:</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
    </React.Fragment>
  );
};
export default Landing;
