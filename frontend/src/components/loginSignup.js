import React from "react";
import {
  CardBody,
  Card,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardText,
} from "reactstrap";


const Auth = (props) => (
  <>
    <Card style={{ width: "300px" }}>
      <CardBody>
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="text"
              name="password"
              id="password"
              placeholder="password"
            />
          </FormGroup>
          <Button>Login</Button>
        </Form>
      </CardBody>
    </Card>
  </>
);

export default Auth;
