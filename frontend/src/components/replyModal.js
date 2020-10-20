import React from "react";
import MessageReply from "./messageReply";
import { Modal } from "reactstrap";
import { StateContext } from "../App";
import { toggleModal } from "./actions";

const ReplyModal = ({ inbox, index, email, read, id, penpal_message }) => {
  const { state, dispatch } = React.useContext(StateContext);

  const toggle = () => {
    dispatch(toggleModal());
  };
  

  return (
    <React.Fragment>
      <Modal isOpen={state.modal} toggle={toggle}>
        <MessageReply
          inbox={inbox}
          index={index}
          email={email}
          read={read}
          id={id}
          penpal_message={penpal_message}
        />
      </Modal>
    </React.Fragment>
  );
};

export default ReplyModal;
