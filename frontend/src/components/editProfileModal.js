import React from "react";
import EditProfile from './editProfile'
import { Modal } from "reactstrap";
import { StateContext } from "../App";
import { toggleModal } from "./actions";

const EditProfileModal = (props) => {
    const { state, dispatch } = React.useContext(StateContext);

  const toggle = () => {
    dispatch(toggleModal());
  };
  
    const myref = React.createRef();
  return (
    <div ref={myref}>
      <Modal isOpen={state.modal} toggle={toggle}>
        <EditProfile />
      </Modal>
    </div>
  );
};

export default EditProfileModal;