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
import { getToken, loginOrOut} from "./actions";
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
      dispatch(getToken(key));
      dispatch(loginOrOut());
      // const profileUrl = "http://127.0.0.1:8000/rest-auth/user/";
      // const response = await fetch(profileUrl, {
      //   method: "GET",
      //   headers: { Authorization: `Token ${key}` },
      // });
      // let result = await response.json();
    
      // let {survey , ...profile}=result;
      // dispatch(getProfile([profile]))
      // dispatch(getSurvey([survey]))
      // console.log(profile)
      window.localStorage.setItem("key",key)
      
      history.push("/home/")
      // history.push({pathname:"/home/",state:{
      //   profile,
      // }});
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
