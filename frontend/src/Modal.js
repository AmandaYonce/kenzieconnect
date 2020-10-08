import React from "react";
import UserRegistration from "./components/userRegistration";
import { Modal } from "reactstrap";
import { StateContext } from "./App";
import { toggleModal } from "./components/actions";

const ModalRegistration = (props) => {
  const { state, dispatch } = React.useContext(StateContext);

  const toggle = () => {
    dispatch(toggleModal());
  };

  const myref = React.createRef();

  return (
    <div ref={myref}>
      <Modal isOpen={state.modal} toggle={toggle}>
        <UserRegistration />
      </Modal>
    </div>
  );
};

export default ModalRegistration;
