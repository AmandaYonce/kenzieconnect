import React from "react";
import { Button } from "reactstrap";
import HeaderMain from "./headerMain";
// import UserRegistration from "./userRegistration";
import Auth from "./loginSignup";
import FullLogo from "../images/fullLogo.png";
import one from "../images/beachcouple.jpeg";
import two from "../images/classiccouple.jpeg";
import three from "../images/parkcouple.jpeg";
import four from "../images/raincouple.jpeg";
import five from "../images/relaxcouple.jpeg";
import six from "../images/sexycouple.png";
import seven from "../images/streetcouple.jpeg";
import eight from "../images/weddingcouple.jpeg";
import { StateContext } from "../App";
import { toggleModal } from "./actions";
import ModalRegistration from "../Modal";

const Main = (props) => {
  const { state, dispatch } = React.useContext(StateContext);
  const openModal = () => {
    dispatch(toggleModal());
  };

  return (
    <React.Fragment>
      <HeaderMain />

      <div className="mainContainer">
        <div className="topLeft">
          <div className="reg">
            <h1 className="regFont">Register Here to Get Connected!</h1>
            <Button size="lg" onClick={() => openModal()}>
              Register
            </Button>
            <ModalRegistration show={state.modal} onHide={() => openModal()} />
          </div>
        </div>
        <div className="right">
          <div id="collage-container">
            <img src={one} id="collage-one" alt="collage-one" />
            <img src={two} id="collage-two" alt="collage-two" />
            <img src={three} id="collage-three" alt="collage-three" />
            <img src={four} id="collage-four" alt="collage-four" />
            <img src={five} id="collage-five" alt="collage-five" />
            <img src={six} id="collage-six" alt="collage-six" />
            <img src={seven} id="collage-seven" alt="collage-seven" />
            <img src={eight} id="collage-eight" alt="collage-eight" />
          </div>

          <div className="rightBottom">
            <img className="fullLogo" alt="Full Logo" src={FullLogo} />
          </div>
        </div>
        <div className="bottomLeft">
          <div className="auth">
            <Auth />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Main;
