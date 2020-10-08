import React from "react";
import Header from "./header";
import { CardBody, Card, Col, Row, CardText } from "reactstrap";
import placeholder from '../images/placeholder.png'

const Landing = (props) => {
  return (
    <React.Fragment >
      <div style={{backgroundColor: "#888888", height: "1000px"}}>
      <Header />

      <Row style={{ margin: '1em' }}>
        <Card id="notifCard">
          <a class="notifText" href="/messagefeed/:username">You have 4 New Messages</a>
        </Card>
      </Row>

{/* Once we have data coming in we will delete all but 1 of the col/cards below and use map
to display 3 random matches from the list of potentials */}
      <Row style={{ justifyContent: "center" }} row-12>
          <h1 style={{fontFamily: 'Montserrat', fontSize: "2.5em"}}>Your Daily Matches</h1>
      </Row>
      <Row style={{ margin: "2em" }} row-12>
        
        <Col col-3>
          <Card style={{ width: "20em", margin: "0 auto"}}>
            <CardBody>
              <img alt="prfoilepic" src={placeholder} style={{width: '15em'}}/>
              <CardText>Name:</CardText>
              <CardText>Age:</CardText>
              <CardText>Gender:</CardText>
              <CardText>Sexual Preference:</CardText>
              <CardText>Percentage Match:</CardText>
              <CardText>Bio:</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col col-3>
          <Card style={{ width: "20em", margin: "0 auto"}}>
            <CardBody>
            <img alt="prfoilepic" src={placeholder} style={{width: '15em'}}/>
              <CardText>Name:</CardText>
              <CardText>Age:</CardText>
              <CardText>Gender:</CardText>
              <CardText>Sexual Preference:</CardText>
              <CardText>Percentage Match:</CardText>
              <CardText>Bio:</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col col-3>
          <Card style={{ width: "20em", margin: "0 auto" }}>
            <CardBody>
            <img alt="prfoilepic" src={placeholder} style={{width: '15em'}}/>
              <CardText>Name:</CardText>
              <CardText>Age:</CardText>
              <CardText>Gender:</CardText>
              <CardText>Sexual Preference:</CardText>
              <CardText>Percentage Match:</CardText>
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
