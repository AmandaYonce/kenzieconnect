import React, { Component } from 'react';
import Header from "./header"
import { CardBody, Card, Col, Row, CardText } from 'reactstrap';


class Profile extends Component {
  render() {
  return (
    <div >
        <Header/>
        <h1>Profile</h1>
        <Row style={{width: "60em", margin: "5em"}}>
          <Col>
            <Card style={{width: "25em", margin: "2em"}}>
              <CardBody>
                <CardText>User Profile</CardText>
                <CardText>Username:</CardText>
              </CardBody>
            </Card>
        </Col>
       
        </Row>
    </div>
  );
}
}
export default Profile;