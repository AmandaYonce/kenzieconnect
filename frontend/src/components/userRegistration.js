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
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import { StateContext } from "../App";
import { loggingIn } from "./actions";

const UserRegistration = (props) => {
  const { dispatch } = React.useContext(StateContext);
  const history = useHistory();

  // const authenticateHandler = (data) => {
  //   console.log(data);

  //   //might need to reach out to backend to make sure that the user is authenticated
  // };
  
  const handleToggle = (modal) => {
    // modal=!modal 
    history.push(`/home/`);
  };
  var modal=false

  const handleRegistration = (e) => {
    e.preventDefault();

    history.push("/survey/");
  };
  return (
    <React.Fragment>
    <Modal isOpen={modal} toggle={handleToggle} className="modal">
      <Card style={{ width: "500px" }}>
      <CardText>Join Now to Get Connected!</CardText>
        <CardBody>
          <Form onSubmit={handleRegistration, handleToggle}>
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
            <FormGroup>
              <Label for="displayname">Displayname</Label>
              <Input
                type="text"
                name="displayname"
                id="displayname"
                placeholder="displayname"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="bio">bio</Label>
              <Input
                type="text"
                name="bio"
                id="bio"
                placeholder="bio"
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">age</Label>
              <Input
                type="text"
                name="age"
                id="age"
                placeholder="age"
              />
            </FormGroup>
            <FormGroup row>
              <Label for="survey8" sm={2}>
                Gender
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="gender"
                  id="gender"
                  required={true}
                >
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
      </Modal>
    </React.Fragment>
  );
};
export default UserRegistration;
