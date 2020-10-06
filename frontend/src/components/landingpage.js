import React from "react";
import Header from "./header";
import { CardBody, Card, Col, Row, CardText } from "reactstrap";

const Landing = (props) => (
  <div>
    <Header />
    <Row style={{ width: "400px", margin: "5em" }}>
      <a href="/messagefeed/:username">You have 4 New Messages</a>
    </Row>
    <Row style={{ width: "60em", margin: "5em" }}>
      <Col>
        <Card style={{ width: "25em", margin: "2em" }}>
          <CardBody>
            <CardText>Matched Profile</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "25em", margin: "2em" }}>
          <CardBody>
            <CardText>Matched Profile</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "25em", margin: "2em" }}>
          <CardBody>
            <CardText>Matched Profile</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Landing;
