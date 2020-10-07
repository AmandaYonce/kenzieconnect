import React from "react";
import {
  CardBody,
  Card,
  Button,
  CardText,
} from "reactstrap";
import HeaderMain from "./headerMain";
import Auth from './loginSignup'
import FullLogo from '../images/fullLogo.png'
import one from "../images/beachcouple.jpeg"
import two from '../images/classiccouple.jpeg'
import three from '../images/parkcouple.jpeg'
import four from '../images/raincouple.jpeg'
import five from '../images/relaxcouple.jpeg'
import six from '../images/sexycouple.png'
import seven from '../images/streetcouple.jpeg'
import eight from '../images/weddingcouple.jpeg'

const Main = (props) => (
  <>
    <HeaderMain />
    
    <div clas="mainContainer">
    <div class="topLeft">
        <div class="auth">
            <Auth />
        </div>
    </div>
    <div class="right">
        <div id="collage-container">
            <img src={one} id="collage-one" />
            <img src={two} id="collage-two" />
            <img src={three} id="collage-three" />
            <img src={four} id="collage-four" />
            <img src={five} id="collage-five" />
            <img src={six} id="collage-six" />
            <img src={seven} id="collage-seven" />
            <img src={eight} id="collage-eight" />
        </div>


        <div class="rightBottom">
            <img class="fullLogo"alt='Full Logo' src={FullLogo} />
        </div>
    </div>
    <div class='bottomLeft'>
        <div class='reg'>
        <Card style={{ width: "300px",marginTop: "30px" }}>
            <CardText>Join Now to Get Connected!</CardText>
            <Button>Sign Up</Button>
        </Card>
        </div>
    </div>
    </div>
  </>
);

export default Main;