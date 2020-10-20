import React from "react";

import { StateContext } from "../App";
import { toggleModal, getInbox } from "./actions";
import { getAuthData } from "./helpers";
import {
  CardBody,
  Card,
  Col,
  Button,
  Label,
  Input,
  FormGroup,
} from "reactstrap";

const MessageReply = ({ inbox, index, email, read, id, penpal_message }) => {
  const { state, dispatch } = React.useContext(StateContext);
  const postUrl = "http://127.0.0.1:8000/draftmessage/";
  const usersUrl = "http://127.0.0.1:8000/inbox/";
  let token = localStorage.getItem("key");
  // console.log(index);
  // console.log(id)

  const handlePost = async (data) => {
    console.log(data);
    const response = await fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(data),
    });

    console.log(await response.json());
  };

  const handlePut = async (data) => {
    const putUrl = `http://127.0.0.1:8000/message/${id}/`;
    console.log(id);

    await fetch(putUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(data),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let text = e.target.text.value;
    console.log(text);
    console.log(inbox);
    console.log(email);
    console.log(read);
    let putData = {
      message_read: true,
    };
    let postData = {
      penpal_message: text,
      from_user: state.profile[0].email,
      to_user: email,
      message_read: false,
    };
    await handlePost(postData);
    await handlePut(putData);
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
