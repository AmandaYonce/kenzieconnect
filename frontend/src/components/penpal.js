import React from "react";
import Header from "./header";
import { CardBody, Card, Col, Row, CardText } from "reactstrap";

const PenPal = (props) => (
  <div>
    <Header />
    <h1>Pen Pal Message Page</h1>
    <Row style={{ width: "60em", margin: "5em" }}>
      <Col>
        <Card style={{ width: "25em", margin: "2em" }}>
          <CardBody>
            <CardText>Message</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "25em", margin: "2em" }}>
          <CardBody>
            <CardText>Message</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "25em", margin: "2em" }}>
          <CardBody>
            <CardText>Message</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export default PenPal;
