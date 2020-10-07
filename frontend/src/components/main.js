import React from "react";
import {
  CardBody,
  Card,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardText,
} from "reactstrap";
import Header from "./header";
import Auth from './loginSignup'

import FullLogo from '../images/fullLogo.png'

const Main = (props) => (
  <>
    <Header />
    
    <div clas="mainContainer">
    <div class="topLeft">
        <div class="auth">
            <Auth />
        </div>
    </div>
    <div class="right">
        <div class="rightBottom">
            <img class="fullLogo"alt='Full Logo' src={FullLogo} />
        </div>
    </div>
    <div class='bottomLeft'>
        <div class='reg'>
        <Card style={{ width: "300px", marginLeft: "30px", marginTop: "30px" }}>
            <CardText>New User Registration</CardText>
            <Button>Sign Up</Button>
        </Card>
        </div>
    </div>
    </div>
  </>
);

export default Main;