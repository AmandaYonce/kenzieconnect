import React from "react";
import Header from "./header";
import { StateContext } from "../App";
import { Row } from "reactstrap";
import WinkCards from './winkCards'

const Winks = (props) => {

  const { state, dispatch } = React.useContext(StateContext);

  return (
    <div style={{backgroundColor: "#4a5066", height: "1000px" }}>
      <Header />
      <h1 className="penpalTitle">These Users Have Winked At You...</h1>

      <Row style={{ margin: "4em" }} row-12="true">
          <WinkCards />
        </Row>
    </div>
  );
};

export default Winks;
