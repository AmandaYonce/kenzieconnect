import React from "react";
import { CardBody, Card, CardText } from "reactstrap";
import check from "../images/check.png"


const Tips = (props) => {

    return (
        <>
        <Card>
            <CardBody>
                <CardText style={{fontFamily: 'Dosis', fontSize: "3em"}}>Profile Hints & Tips</CardText>
                <div style={{fontFamily: 'Dosis', fontSize: "1.5em"}}>
                <CardText><img className="check" src={check} alt="check"/>Don't Leave Anything Blank.</CardText>
                <CardText><img className="check" src={check} alt="check"/>Be honest. People LOVE it.</CardText>
                <CardText><img className="check" src={check} alt="check"/>Don’t hide your face in your profile photo.</CardText>
                <CardText><img className="check" src={check} alt="check"/>Don’t write a novel.</CardText>
                <CardText><img className="check" src={check} alt="check"/>Feel free to talk about your kids. </CardText>
                <CardText><img className="check" src={check} alt="check"/>Add details.</CardText>
                <CardText><img className="check" src={check} alt="check"/>Don’t talk about dating.</CardText>
                <CardText><img className="check" src={check} alt="check"/>Get a little romantic. </CardText>
                <CardText><img className="check" src={check} alt="check"/>Be your wonderful, weird self. </CardText>
                </div>
            </CardBody>
        </Card>
        </>

    )
}
export default Tips