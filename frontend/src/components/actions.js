const actionCreator = (type, ...payloadNames) => (...args) => {
  const action = { type };
  payloadNames.forEach((_, index) => {
    action[payloadNames[index]] = args[index];
  });
  return action;
};

const actions = {
  PROFILE: "PROFILE",
  SURVEY: "SURVEY",
  LOGIN: "LOGIN",
  TOGGLELOGIN: "TOGGLELOGIN",
  TOGGLEMODAL: "TOGGLEMODAL",
  TOKEN: "TOKEN",
  USERS: "USERS",
  NAVIGATE:"NAVIGATE"
};

const getProfile = actionCreator(actions.PROFILE, "profile");
const getSurvey = actionCreator(actions.SURVEY, "survey");
const loginOrOut = actionCreator(actions.TOGGLELOGIN);
const toggleModal = actionCreator(actions.TOGGLEMODAL);
const getToken = actionCreator(actions.TOKEN, "token");
const getUsers = actionCreator(actions.USERS, "users");
const navigate=actionCreator(actions.NAVIGATE,"value");
const receiveProfile = (list) => (dispatch) => dispatch(getProfile(list));

const receiveSurvey = (surveyData) => (dispatch) =>
  dispatch(getSurvey(surveyData));

const receiveUsers = (usersData) => (dispatch) => dispatch(getUsers(usersData));

// const loggingOut = (dispatch) => dispatch(logout());

export {
  actions,
  receiveProfile,
  receiveSurvey,
  loginOrOut,
  toggleModal,
  getToken,
  getSurvey,
  getProfile,
  receiveUsers,
  navigate
};
