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
import { loginOrOut } from "./actions";
import { formData } from "./helpers";
import { StateContext } from "../App";
// import { toggleModal } from "./actions";

const UserRegistration = ({ modal }) => {
  const { dispatch } = React.useContext(StateContext);
  const history = useHistory();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    let regData = formData(form);
    console.log(regData);
    dispatch(loginOrOut());
    history.push({ pathname: "/survey/", state: { profile: regData } });
  };

  const formNames = ["Email", "Display Name", "Password", "Bio", "Age"];

  const formGroups = formNames.map((value, index) => (
    <FormGroup key={index}>
      <Label sm={4} for={value}>
        {value}
      </Label>
      <Col sm={8}>
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
          name={value.replaceAll(" ", "").toLowerCase()}
          id={value}
          placeholder={value}
          required={true}
          min={value === "Age" && 18}
        />
      </Col>
    </FormGroup>
  ));

  return (
    <React.Fragment>
      <Card style={{ width: "700px" }}>
        <CardText
          style={{
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: "3em",
          }}
        >
          Join Now to Get Connected!
        </CardText>
        <CardBody>
          <Form
            onSubmit={handleRegistration}
            style={{ fontFamily: "Montserrat" }}
          >
            {formGroups}
            <FormGroup row>
              <Label for="survey8" sm={4}>
                Gender
              </Label>
              <Col sm={8}>
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
              <Label for="sexual_preference" sm={4}>
                Sexual Preference
              </Label>
              <Col sm={8}>
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
