const actionCreator = (type, ...payloadNames) => (...args) => {
  const action = { type };
  payloadNames.forEach((_, index) => {
    action[payloadNames[index]] = args[index];
  });
  return action;
};

const actions = {
  LIST: "LIST",
  SURVEY: "SURVEY",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const getList = actionCreator(actions.LIST, "list");
const getSurvey = actionCreator(actions.SURVEY, "survey");
const login = actionCreator(actions.LOGIN);
const logout = actionCreator(actions.LOGOUT);

const receiveList = (list) => (dispatch) => dispatch(getList(list));

const receiveSurvey = (surveyData) => (dispatch) =>
  dispatch(getSurvey(surveyData));


const loggingIn = (dispatch) => dispatch(login());
const loggingOut = (dispatch) => dispatch(logout());

export { actions, getList, receiveList, receiveSurvey, loggingOut, loggingIn };
