import React from "react";
import MessageReply from "./messageReply";
import { Modal } from "reactstrap";
import { StateContext } from "../App";
import { toggleModal } from "./actions";

const ReplyModal = (props) => {
    const { state, dispatch } = React.useContext(StateContext);

  const toggle = () => {
    dispatch(toggleModal());
  };
  
    const myref = React.createRef();
  return (
    <div ref={myref}>
      <Modal isOpen={state.modal} toggle={toggle}>
        <MessageReply />
      </Modal>
    </div>
  );
};

export default ReplyModal;