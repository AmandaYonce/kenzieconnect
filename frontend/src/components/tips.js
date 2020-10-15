import React from "react";
import { CardBody, Card, CardText } from "reactstrap";
import check from "../images/check.png";

const Tips = (props) => {
  const tips = [
    "Don't Leave Anything Blank.",
    "Be honest. People LOVE it.",
    "Don’t write a novel.",
    "Feel free to talk about your kids.",
    "Add details.",
    "Don’t talk about dating.",
    "Get a little romantic.",
    "Be your wonderful, weird self.",
  ].map((value,index) => (
    <CardText key={index}>
      <img className="check" src={check} alt="check" />
      {value}
    </CardText>
  ));

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardText style={{ fontFamily: "Dosis", fontSize: "3em" }}>
            Profile Hints & Tips
          </CardText>
          <div style={{ fontFamily: "Dosis", fontSize: "1.5em" }}>{tips}</div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
export default Tips;
