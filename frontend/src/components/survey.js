import React from "react";
import Header from "./header";
import {
  CardBody,
  Card,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";
// import { postData } from "./helpers";
import { useHistory } from "react-router-dom";
import { receiveSurvey } from "./actions";
import { StateContext } from "../App";

const Survey = (props) => {
  const history = useHistory();
  const { dispatch } = React.useContext(StateContext);
  const handleSignup = async (data) => {
    // console.log(data);
    //const{username,password}=data
    // await postData(url, {username,password})  need to post a new user and also new survey data and have it match with models

    let surveyArray = Object.values(data).slice(2);

    receiveSurvey(surveyArray)(dispatch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let form = event.target;
    console.log(form);
    let surveyData = {};
    for (const fields of form) {
      let { name, value } = fields;
      surveyData[name] = value;
    }
    handleSignup(surveyData);
    form.reset();
    history.push(`/profile/${surveyData.username}`);
  };

  return (
    <div>
      <Header />
      <h1>New User Registration Page</h1>
      <Card style={{ width: "1000px", marginLeft: "30px", marginTop: "30px" }}>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="survey1" sm={2}>
                Do you have pets:
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="survey1"
                  id="survey1"
                  required={true}
                >
                  <option value="">------</option>
                  <option>Dogs</option>
                  <option>Cats</option>
                  <option>Dogs and Cats</option>
                  <option>no pets</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="survey2" sm={2}>
                Do you like spicey food:
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="survey2"
                  id="survey2"
                  required={true}
                >
                  <option value="">------</option>
                  <option>yes</option>
                  <option>no</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="survey3" sm={2}>
                What is your perfect date?
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="survey3"
                  id="survey3"
                  required={true}
                >
                  <option value="">------</option>
                  <option>late nighter</option>
                  <option>early evening</option>
                  <option>weekend afternoon</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="survey4" sm={2}>
                Which date activity do you prefer?
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="survey4"
                  id="survey4"
                  required={true}
                >
                  <option value="">------</option>
                  <option>Dancing</option>
                  <option>Movies</option>
                  <option>Fine Dining Dinner</option>
                  <option>Picnic</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="survey5" sm={2}>
                Which star wars character are you most like?
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="survey5"
                  id="survey5"
                  required={true}
                >
                  <option value="">------</option>
                  <option>Darth Vader</option>
                  <option>Luke Skywalker</option>
                  <option>Hans Solo</option>
                  <option>Princess Leia</option>
                  <option>Padme Amidala</option>
                  <option>Jyn Erso</option>
                  <option>Yoda</option>
                  <option>Chubacka</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="survey6" sm={2}>
                Do you prefer Beer, Wine or Cocktails?
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="survey6"
                  id="survey6"
                  required={true}
                >
                  <option value="">------</option>
                  <option>Beer</option>
                  <option>Wine</option>
                  <option>Cocktails</option>
                  <option>No Alcohol</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="survey7" sm={2}>
                Hand on Heart, are you wearing Pjs right now?
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="survey7"
                  id="survey7"
                  required={true}
                >
                  <option value="">------</option>
                  <option>Never</option>
                  <option>100% yes</option>
                  <option>Business on top, Pjs on bottom</option>
                  <option>Literally took them off 1 minute ago</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="survey8" sm={2}>
                Are you an Early Bird or Night Owl
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="survey8"
                  id="survey8"
                  required={true}
                >
                  <option value="">------</option>
                  <option>Early Bird</option>
                  <option>Night Owl</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="survey9" sm={2}>
                If age is a state of mind, which category best describes you?
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="survey9"
                  id="survey9"
                  required={true}
                >
                  <option value="">------</option>
                  <option>Cheeky Child</option>
                  <option>Tormented Teenager</option>
                  <option>Mad Mid-lifer</option>
                  <option>Groovy Grandparent</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="survey10" sm={2}>
                If you were a breed of dog, which would you be?{" "}
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="survey10"
                  id="survey10"
                  required={true}
                >
                  <option value="">------</option>
                  <option>Jack Russell – small, tough, opinionated</option>
                  <option>
                    Tibetan Mastiff – or some other very rare breed
                  </option>
                  <option>
                    German Shepherd – poised and elegant but rather hardy
                  </option>
                  <option>
                    Poodle – beautifully presented but a bit of a poser
                  </option>
                  <option>
                    Golden Retriever – warm, cuddly and great with children
                  </option>
                  <option>Pit Bull Terrier – scary but kind deep down</option>
                  <option>Labradoodle – or some other cute hybrid</option>
                </Input>
              </Col>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Survey;
