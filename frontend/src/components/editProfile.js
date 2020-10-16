import React from "react";

import { StateContext } from "../App";
import { toggleModal } from "./actions";
import { CardBody, Card, Col, Row, CardText, Button } from "reactstrap";

const EditProfile= (props) => {
    const { state, dispatch } = React.useContext(StateContext);
    const openModal = () => {
      dispatch(toggleModal());
    };
  return (
    <div style={{backgroundColor: "#4a5066"}}>
      <Card  >
        <CardBody >
            {/* This will need to populate with the user's existing information*/}
          
          <Button size="lg" >Send</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default EditProfile;