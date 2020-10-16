import React from "react";

import { StateContext } from "../App";
import { toggleModal } from "./actions";
import { CardBody, Card, Col, Row, CardText, Button, Label, Input, FormGroup } from "reactstrap";

const MessageReply = (props) => {
    const { state, dispatch } = React.useContext(StateContext);
    const openModal = () => {
      dispatch(toggleModal());
    };
  return (
    <div style={{backgroundColor: "#4a5066"}}>
      <Card  >
        <CardBody >
            {/* This Message Reply will need to be a text entry box */}
          <FormGroup >
            <Label sm={4} for="text"></Label>
            <Col sm={8}>
            <Input
              type="text"
              name="text"
              id="text"
              placeholder="message"
              required={true}
              className="input-large"
              style={{width: '25em', height: '15em'}}
            />
            </Col>
          </FormGroup>
          <Button size="lg" >Send</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MessageReply;
