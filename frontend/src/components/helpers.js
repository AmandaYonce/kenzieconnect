import React from "react";
import { receiveProfile, getProfile, getSurvey } from "./actions";

const routeDispatcher = (list) =>
  list.map((element, index) => (
    <React.Fragment key={index}>
      {element.match && element.component()}
    </React.Fragment>
  ));

const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) => {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
};

const postData = async (postUrl, data) => {
  // console.log(data);
  try {
    const response = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const post_response = await response.json();
    if ("key" in post_response) {
      return post_response["key"];
    }
    // return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getData = (url, dispatch, actionCallback) =>
  (async () => {
    try {
      // console.log("working");
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      // console.log("working");
      // console.log(data);
      actionCallback(data)(dispatch);
      return data;
    } catch (error) {
      console.error(error);
    }
  })();

const getAuthData = (url, dispatch, actionCallback, token) =>
  (async () => {
    try {
      // console.log("working");
      const response = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Token ${token}` },
      });
      const data = await response.json();
      console.log(data);
      console.log("working");

      actionCallback(data)(dispatch);
    } catch (error) {
      console.error(error);
    }
  })();

const getProfileData = async (key, dispatch) => {
  const profileUrl = "http://127.0.0.1:8000/rest-auth/user/";
  // const controller = new AbortController();
  try {
    const response = await fetch(profileUrl, {
      method: "GET",
      headers: { Authorization: `Token ${key}` },
      // signal: controller.signal,
    });
    let result = await response.json();

    let { survey, ...profile } = result;
    dispatch(getProfile([profile]));
    dispatch(getSurvey([survey]));
    return result;
  } catch (error) {
    console.error(error);
    console.log(error.name);
  }
};
const putData = (postUrl, item, dispatch) => async () => {
  const d = await fetch(postUrl);
  const response = await d.json();

  // enter logic here to update
  let post = {};
  try {
    const postData = await fetch(postUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    let postDataResponse = await postData.json();

    let items = item.list.filter(({ id }) => id !== response.id);
    items = [...items, postDataResponse];
    //enter more logic her to modify front end state if needed

    // console.log(items);
    receiveProfile(items)(dispatch);
  } catch (error) {
    console.error(error);
  }
};

const formData = (form) => {
  let surveyData = {};
  for (const fields of form) {
    let { name, value } = fields;
    surveyData[name] = value;
  }
  return surveyData;
};

const matchMaker = async (a, b) => {
  const { survey, email: e } = await b;

  let users = (await a).filter(({ email }) => email !== e);
  // console.log(email)
  // console.log(survey);
  // console.log(users);
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
    let result = [];
    answers.forEach((userAnswer) => {
      let output = userAnswer.map((a, index) => {
        let pAnswer = profileAnswers[index];

        return pAnswer === a ? 1 : 0;
      });
      result.push(output);
    });
    return result;
  };

  let formattedAnswers = formatAnswers(answers);

  console.log(formattedAnswers);

  const matchResults = (results) => {
    let output = results.map((r) => r.reduce((acc, curr) => acc + curr));
    return output;
  };
  console.log(matchResults(formattedAnswers));
  return matchResults(formattedAnswers);
};


export {
  createReducer,
  postData,
  getData,
  receiveProfile,
  putData,
  routeDispatcher,
  formData,
  getAuthData,
  getProfileData,
  matchMaker,
};
