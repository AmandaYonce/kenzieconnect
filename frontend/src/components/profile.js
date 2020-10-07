import React from "react";
import Header from "./header";
import { CardBody, Card, Col, Row, CardText } from "reactstrap";
import { StateContext } from "../App";

const Profile = (props) => {
  const { state } = React.useContext(StateContext);
  return (
    <div>
      <Header />
      <h1>Profile</h1>
      <Row style={{ width: "60em", margin: "5em" }}>
        <Col>
          <Card style={{ width: "25em", margin: "2em" }}>
            <CardBody>
              <CardText>User Profile</CardText>
              <CardText>Username:{state.user}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
