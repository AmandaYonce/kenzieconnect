import React from "react";
import { Card, Button, CardText } from "reactstrap";
import HeaderMain from "./headerMain";
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

const Main = (props) => {
  return (
    <React.Fragment>
      <HeaderMain />

      <div className="mainContainer">
        <div className="topLeft">
          <div className="auth">
            <Auth />
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
          <div className="reg">
            <Card style={{ width: "300px", marginTop: "30px" }}>
              <CardText>Join Now to Get Connected!</CardText>
              <span>
                <a href="/signup/">
                  <Button>Signup</Button>
                </a>
              </span>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Main;
