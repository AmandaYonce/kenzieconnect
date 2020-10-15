import React from "react";
import { CardBody, Card, Col, Row, CardText } from "reactstrap";
import placeholder from "../images/placeholder.png";
import logo from "../images/logo.png";
import wink from "../images/wink.png";
import { getData, getProfileData } from "./helpers";
import { receiveUsers } from "./actions";
import { StateContext } from "../App";
const LandingCards = (props) => {
  //map three random mathes here from fetch
  const { state, dispatch } = React.useContext(StateContext);
  const usersUrl = "http://127.0.0.1:8000/users/";
  const key = window.localStorage.getItem("key");

  const matchMaker = async (a, b) => {
    const users = await a;
    const { survey } = await b;
    console.log(survey);
    console.log(users);
    let profileAnswers = Object.values(survey);
    let answers = [];
    users.forEach((user) => {
      let { survey: s } = user;
      answers = [...answers, Object.values(s)];
      // console.log(answers)
      // console.log(profileAnswers)
      // console.log(s)
    });
    const formatAnswers = (answers) => {
      // let output = [];
      let result = [];
      answers.forEach((userAnswer) => {
        let output = userAnswer.map((a, index) => {
          // console.log(a)
          let pAnswer = profileAnswers[index];
          // console.log(a===profileAnswers[index])
          return pAnswer === a ? 1 : 0;
        });
        result.push(output);
        // console.log(output);
        // console.log(abc);
      });

      // console.log(output);
      return result;
    };
    // console.log(formatAnswers(answers));

    let formattedAnswers=formatAnswers(answers)

    console.log(formattedAnswers)

    // answers.reduce((acc,curr,index)=>{
    //   console.log(index)
    // },0)
    // console.log(answers)

    // const test = (acc = 0, cur) => {
    //   let scores = [];
    //   // console.log(cur[index])
    //   cur.forEach((value, index) => {
    //     // console.log(value)
    //     if (value === profileAnswers[index]) return acc += 1;
    //   });

    //   scores.push(acc);
    //   // console.log(scores)
    //   return
    // };
    // let results = answers.reduce(test, 0);
    // console.log(results)
  };

  React.useEffect(() => {
    let a = getData(usersUrl, dispatch, receiveUsers);
    let b = getProfileData(key, dispatch);
    matchMaker(a, b);
  }, [key, dispatch]);

  // const test = [
  //   {
  //     name: "bob",
  //     age: 34,
  //     gender: "boy",
  //     preference: "women",
  //     bio: "i love cats",
  //   },
  //   {
  //     name: "sue",
  //     age: 50,
  //     gender: "woman",
  //     preference: "men",
  //     bio: "i love sports",
  //   },
  //   {
  //     name: "liz",
  //     age: 45,
  //     gender: "woman",
  //     preference: "men",
  //     bio: "i love dogs",
  //   },
  // ];
  // console.log(page.start,page.end)

  const users = state.users.map((value, index) => (
    <Col col-3="true" key={index}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-back">
            <Card
              style={{
                width: "20em",
                margin: "0 auto",
                boxShadow: "5px 10px 2px #4a5066",
              }}
            >
              <CardBody>
                <Row style={{ textAlign: "center" }}>
                  <img
                    alt="prfoilepic"
                    src={placeholder}
                    style={{ width: "10em", paddingRight: "1em" }}
                  />
                  <h1 style={{ fontFamily: "Montserrat", fontSize: "2.5em" }}>
                    90% <br />
                    Match
                    <br />
                    {/* when the user clicks on this icon it should trigger a wink */}
                    <img alt="wink" style={{ width: "2em" }} src={wink} />
                  </h1>
                </Row>
                <CardText>Name:{value.displayname}</CardText>
                <CardText>Age:{value.age}</CardText>
                <CardText>Gender:{value.gender}</CardText>
                <CardText>Sexual Preference:{value.sexual_preference}</CardText>
                <CardText>Bio:{value.bio}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="flip-card-front">
            <Card style={{ width: "20em", height: "100%", margin: "0 auto" }}>
              <CardBody>
                <Row style={{ alignItems: "center" }}>
                  <img alt="logo" src={logo} style={{ width: "19.7em" }} />
                </Row>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  ));

  return users.slice(state.page.start, state.page.end);
};

export default LandingCards;
