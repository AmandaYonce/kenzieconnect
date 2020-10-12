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
import { loginOrOut } from "./actions";

const Auth = (props) => {
  const { dispatch } = React.useContext(StateContext);
  const history = useHistory();

  const authenticateHandler = async (data) => {
    console.log(data);

    
    //might need to reach out to backend to make sure that the user is authenticated
  };
  const formGroups = ["Username", "Password"].map((value, index) => (
    <FormGroup key={index}>
      <Label for="username">{value}</Label>
      <Input
        type="text"
        name={value.toLowerCase()}
        id={value.toLowerCase()}
        placeholder={value.toLowerCase()}
      />
    </FormGroup>
  ));

  const handleLogin = (e) => {
    e.preventDefault();

    
    dispatch(loginOrOut());
    history.push("/home/");
  };
  return (
    <React.Fragment>
      <Card style={{ width: "300px" }}>
        <CardBody>
          <Form onSubmit={handleLogin}>
            {formGroups}
            <Button>Login</Button>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
export default Auth;
