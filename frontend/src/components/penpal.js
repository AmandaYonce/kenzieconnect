import React from "react";
import Header from "./header";
import { CardBody, Card, Col, Row, CardText } from "reactstrap";

const PenPal = (props) => {
  const messages = ["testing", "testing", "testing"].map((value, index) => (
    <Col key={index}>
      <Card style={{ width: "25em", margin: "2em" }}>
        <CardBody>
          <CardText>Message</CardText>
          {value}
        </CardBody>
      </Card>
    </Col>
  ));
  return (
    <div>
      <Header />
      <h1>Pen Pal Message Page</h1>
      <Row style={{ width: "60em", margin: "5em" }}>{messages}</Row>
    </div>
  );
};

export default PenPal;
