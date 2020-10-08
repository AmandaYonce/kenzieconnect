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
  TOGGLELOGIN: "TOGGLELOGIN",
  TOGGLEMODAL: "TOGGLEMODAL",
};

const getList = actionCreator(actions.LIST, "list");
const getSurvey = actionCreator(actions.SURVEY, "survey");
const loginOrOut = actionCreator(actions.TOGGLELOGIN);
const toggleModal = actionCreator(actions.TOGGLEMODAL);

const receiveList = (list) => (dispatch) => dispatch(getList(list));

const receiveSurvey = (surveyData) => (dispatch) =>
  dispatch(getSurvey(surveyData));

// const loggingOut = (dispatch) => dispatch(logout());

export {
  actions,
  getList,
  receiveList,
  receiveSurvey,
  loginOrOut,
  toggleModal,
};
