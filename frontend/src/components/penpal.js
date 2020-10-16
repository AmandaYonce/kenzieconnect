import React from "react";
import Header from "./header";
import ReplyModal from './replyModal'
import { StateContext } from "../App";
import { toggleModal } from "./actions";
import { CardBody, Card, Col, Row, CardText, Button } from "reactstrap";

const PenPal = (props) => {

  const { state, dispatch } = React.useContext(StateContext);
  const openModal = () => {
    dispatch(toggleModal());
  };
  const messages = ["testing", "testing", "testing"].map((value, index) => (

      <Card key={index} className="postcard" >
        <CardBody className="postcardBody">
          <CardText>From:</CardText>
          <CardText>{value}</CardText>
          <CardText>Date:</CardText>
          {/* This button needs to be wired up to bring up the replyModal 
          to send a message back to the user you are replying to */}
          <Button size="lg" onClick={() => openModal()}>Reply</Button>
          <ReplyModal show={state.modal} onHide={() => openModal()} />
        </CardBody>
      </Card>

  ));
  return (
    <div style={{backgroundColor: "#4a5066"}}>
      <Header />
      <h1 className="penpalTitle">Messsages</h1>
      <Row style={{ width: "60em", marginLeft: "10em"}}>{messages}</Row>
    </div>
  );
};

export default PenPal;
