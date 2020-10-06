import React, { Component } from 'react';
import { CardBody, Card, Button, Form, FormGroup, Label, Input, CardText } from 'reactstrap';
import Header from "./header"

class Auth extends Component {
  state={

  }

  render(){

  return (
    < >
    <Header/>
        <Card style={{width: "300px", marginLeft: "30px", marginTop: "30px"}}>
          <CardBody>
            <Form>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" placeholder="username" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="text" name="password" id="password" placeholder="password" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>

        <Card style={{width: "300px", marginLeft: "30px", marginTop: "30px"}}>
          <CardText>New User Registration</CardText>
          <Button>Sign Up</Button>
        </Card>
    </>
  );
}
}

export default Auth;