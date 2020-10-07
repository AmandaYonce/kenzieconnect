import React from "react";
import { useHistory } from "react-router-dom";
import {
  CardBody,
  Card,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { StateContext } from "../App";
import { loggingIn } from "./actions";

const Auth = (props) => {
  const { dispatch } = React.useContext(StateContext);
  const history = useHistory();

  // const authenticateHandler = (data) => {
  //   console.log(data);

  //   //might need to reach out to backend to make sure that the user is authenticated
  // };

  const handleLogin = (e) => {
    e.preventDefault();

    loggingIn(dispatch);
    history.push("/home/");
  };
  return (
    <React.Fragment>
      <Card style={{ width: "300px" }}>
        <CardBody>
          <Form onSubmit={handleLogin}>
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
    </React.Fragment>
  );
};
export default Auth;
