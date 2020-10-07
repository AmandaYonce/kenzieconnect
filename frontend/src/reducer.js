import { actions } from "./components/actions";
import { createReducer } from "./components/helpers";

const initialState = {
  list: [],
  survey: [],
  loggedIn: false,
  user: "kyle",
};

const handlers = {};

handlers[actions.LIST] = (state, action) => ({ ...state, list: action.list });

handlers[actions.SURVEY] = (state, action) => ({
  ...state,
  survey: action.survey,
});

handlers[actions.LOGOUT] = (state, action) => {
  console.log("fired");
  return {
    ...state,
    loggedIn: false,
  };
};
handlers[actions.LOGIN] = (state, action) => ({ ...state, loggedIn: true });

const reducer = createReducer(initialState, handlers);

export { handlers, initialState, reducer };
