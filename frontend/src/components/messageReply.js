import React from "react";

import { StateContext } from "../App";
import { toggleModal } from "./actions";
import { CardBody, Card, Col, Row, CardText, Button } from "reactstrap";

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
          <CardText>Message Text Here</CardText>
          <Button size="lg" >Send</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MessageReply;
