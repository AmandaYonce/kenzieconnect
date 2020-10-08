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
  CardText,
  Col,
} from "reactstrap";
import { formData } from "./helpers";
// import { StateContext } from "../App";
// import { toggleModal } from "./actions";

const UserRegistration = ({ modal }) => {
  // const { dispatch } = React.useContext(StateContext);
  const history = useHistory();

  // const authenticateHandler = (data) => {
  //   console.log(data);

  //   //might need to reach out to backend to make sure that the user is authenticated
  // };

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    let regData = formData(form);
    console.log(regData);
    history.push("/survey/");
  };

  const formNames = [
    "Username",
    "Password",
    "Display Name",
    "Email",
    "Bio",
    "Age",
  ];

  const formGroups = formNames.map((value, index) => (
    <FormGroup key={index}>
      <Label for={value}>{value}</Label>
      <Input
        type={
          value === "Password"
            ? "password"
            : value === "Email"
            ? "email"
            : value === "Age"
            ? "number"
            : "text"
        }
        name={value.toLowerCase()}
        id={value}
        placeholder={value}
        required={true}
      />
    </FormGroup>
  ));

  return (
    <React.Fragment>
      <Card style={{ width: "700px" }}>
        <CardText>Join Now to Get Connected!</CardText>
        <CardBody>
          <Form onSubmit={handleRegistration}>
            {formGroups}
            <FormGroup row>
              <Label for="survey8" sm={2}>
                Gender
              </Label>
              <Col sm={10}>
                <Input type="select" name="gender" id="gender" required={true}>
                  <option value="">------</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>NonBinary</option>
                  <option>Other</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="sexual_preference" sm={2}>
                Sexual Preference
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="sexual_preference"
                  id="sexual_preference"
                  required={true}
                >
                  <option value="">------</option>
                  <option>Straight</option>
                  <option>Gay</option>
                  <option>Bisexual</option>
                  <option>Other</option>
                </Input>
              </Col>
            </FormGroup>
            <a href="/signup/">
              <Button>Signup</Button>
            </a>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
export default UserRegistration;
