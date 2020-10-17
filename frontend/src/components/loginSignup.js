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
import { getToken, loginOrOut } from "./actions";
import { postData } from "./helpers";

const Auth = (props) => {
  const { dispatch } = React.useContext(StateContext);
  const history = useHistory();

  const formGroups = ["Username", "Password"].map((value, index) => (
    <FormGroup key={index}>
      <Label for="username">{value}</Label>
      <Input
        type={value === "Username" ? "email" : "password"}
        name={value.toLowerCase()}
        id={value.toLowerCase()}
        placeholder={value.toLowerCase()}
      />
    </FormGroup>
  ));

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginUrl = "http://127.0.0.1:8000/rest-auth/login/";
    let form = e.target;
    let data = { email: form.username.value, password: form.password.value };

    const key = await postData(loginUrl, data);
    if (key) {
      console.log(key);
      dispatch(getToken(key));
      dispatch(loginOrOut());
      window.localStorage.setItem("key", key);
      history.push("/home/");
    }
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
