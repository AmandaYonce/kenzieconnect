import React from "react";

import { StateContext } from "../App";
import { toggleModal } from "./actions";
import { CardBody, Card, Col, Row, CardText, Button, FormGroup, Label, Input, Form } from "reactstrap";

const EditProfile= (props) => {
    const { state, dispatch } = React.useContext(StateContext);
    const openModal = () => {
      dispatch(toggleModal());
    };
    const handleEdit = (e) => {
        // Need to complete this
      };

      
    const formNames = [
        "Email",
        "Display Name",
        "Password",
        "Bio",
        "Age",
      ];
    
      const formGroups = formNames.map((value, index) => (
        <FormGroup key={index}>
          <Label sm={4} for={value}>{value}</Label>
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
            name={value.replaceAll(" ","").toLowerCase()}
            id={value}
            placeholder={value}
            required={true}
          />
          </Col>
        </FormGroup>
        ));
  return (
    <div >
        <Row
        row-12="true"
        style={{ justifyContent: "center", fontFamily: "Dosis" }}
      >
      <Card
          style={{
            width: "1000px",
            fontSize: "1.5em",
          }}
        >
          <CardBody style={{ border: "4px solid #4a5066" }}>
            {/* This will need to populate with the user's existing information*/}
            <Form onSubmit={handleEdit} style={{fontFamily: "Montserrat"}}>
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
          </Form> 
            <Form onSubmit={handleEdit}>
              <FormGroup row>
                <Label for="survey1" sm={5}>
                  Do you have pets?
                </Label>
                <Col sm={7}>
                  <Input
                    type="select"
                    name="question_pet"
                    id="survey1"
                    required={true}
                  >
                    <option value="">------</option>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Dogs and Cats</option>
                    <option>No Pets</option>
                  </Input>
                </Col>
              </FormGroup>
              {/* <FormGroup row>
                <Label for="survey2" sm={5}>
                  Do you like spicey food?
                </Label>
                <Col sm={7}>
                  <Input
                    type="select"
                    name="question_date"
                    id="survey2"
                    required={true}
                  >
                    <option value="">------</option>
                    <option>yes</option>
                    <option>no</option>
                  </Input>
                </Col>
              </FormGroup> */}
              <FormGroup row>
                <Label for="survey3" sm={5}>
                  What is your perfect date?
                </Label>
                <Col sm={7}>
                  <Input
                    type="select"
                    name="question_date"
                    id="survey3"
                    required={true}
                  >
                    <option value="">------</option>
                    <option>Late-nighter</option>
                    <option>Early Evening</option>
                    <option>Weekend Afternoon</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="survey4" sm={5}>
                  Which date activity do you prefer?
                </Label>
                <Col sm={7}>
                  <Input
                    type="select"
                    name="question_activity"
                    id="survey4"
                    required={true}
                  >
                    <option value="">------</option>
                    <option>PS5</option>
                    <option>Dungeons and Dragons</option>
                    <option>Dinner</option>
                    <option>Hackathon</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="survey5" sm={5}>
                  Which star wars character are you most like?
                </Label>
                <Col sm={7}>
                  <Input
                    type="select"
                    name="question_star"
                    id="survey5"
                    required={true}
                  >
                    <option value="">------</option>
                    <option>Darth Vader</option>
                    <option>LukeSky Walker</option>
                    <option>Han Solo</option>
                    <option>Princess Leia</option>
                    <option>Padme Amidala</option>
                    <option>Jyn Ersp</option>
                    <option>Yoda</option>
                    <option>Chewbacca</option>
                    <option>Jar Jar Binks</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="survey6" sm={5}>
                  Do you prefer Beer, Wine or Cocktails?
                </Label>
                <Col sm={7}>
                  <Input
                    type="select"
                    name="question_booze"
                    id="survey6"
                    required={true}
                  >
                    <option value="">------</option>
                    <option>Beer</option>
                    <option>Wine</option>
                    <option>Cocktails</option>
                    <option>No Alcohol Please</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="survey7" sm={5}>
                  Hand on Heart, are you wearing Pjs right now?
                </Label>
                <Col sm={7}>
                  <Input
                    type="select"
                    name="question_pjs"
                    id="survey7"
                    required={true}
                  >
                    <option value="">------</option>
                    <option>Never</option>
                    <option>100% Yes</option>
                    <option>Business on top, pjs on bottom</option>
                    <option>Literally took them off 1 minute ago</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="survey8" sm={5}>
                  Are you an Early Bird or Night Owl
                </Label>
                <Col sm={7}>
                  <Input
                    type="select"
                    name="question_sleep"
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
                <Label for="survey9" sm={5}>
                  If age is a state of mind, which category best describes you?
                </Label>
                <Col sm={7}>
                  <Input
                    type="select"
                    name="question_mind"
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
                <Label for="survey10" sm={5}>
                  If you were a breed of dog, which would you be?{" "}
                </Label>
                <Col sm={7}>
                  <Input
                    type="select"
                    name="question_dog"
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
      </Row>
    </div>
  );
};

export default EditProfile;