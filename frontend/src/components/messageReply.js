import React from "react";

import { StateContext } from "../App";
import { toggleModal, getInbox } from "./actions";
import { getAuthData, handlePost,handlePut } from "./helpers";
import {
  CardBody,
  Card,
  Col,
  Button,
  Label,
  Input,
  FormGroup,
} from "reactstrap";

const MessageReply = ({ index, email, id, penpal_message }) => {
  const { dispatch } = React.useContext(StateContext);
  const usersUrl = "http://127.0.0.1:8000/inbox/";
  let token = localStorage.getItem("key");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let text = e.target.text.value;
    // console.log(text);
    // console.log(inbox);
    // console.log(email);
    // console.log(read);
    let putData = {
      penpal_message,
      message_read: true,
      to_user: email,
    };
    let postData = {
      penpal_message: text,
      to_user: email,
      message_read: false,
    };
    await handlePost(postData);
    await handlePut(putData,id);
    await getAuthData(usersUrl, dispatch, getInbox, token);
    dispatch(toggleModal());
  };

  return (
    <div style={{ backgroundColor: "#4a5066" }}>
      <Card>
        <CardBody>
          {/* This Message Reply will need to be a text entry box */}
          <FormGroup onSubmit={handleSubmit}>
            <Label sm={4} for="text"></Label>
            <Col sm={8}>
              <form>
                <Input
                  type="text"
                  name="text"
                  id={"text" + index}
                  placeholder="message"
                  required={true}
                  className="input-large"
                  style={{ width: "25em", height: "15em" }}
                />

                <Button size="lg" type="submit">
                  Send
                </Button>
              </form>
            </Col>
          </FormGroup>
        </CardBody>
      </Card>
    </div>
  );
};

export default MessageReply;
