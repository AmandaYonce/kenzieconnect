import { actions } from "./components/actions";
import { createReducer } from "./components/helpers";

const initialState = {
  profile: [],
  survey: [],
  loggedIn: false,
  user: "kyle",
  modal: false,
};

const handlers = {};

handlers[actions.Profile] = (state, action) => ({
  ...state,
  list: action.list,
});

handlers[actions.SURVEY] = (state, action) => ({
  ...state,
  survey: action.survey,
});

handlers[actions.TOGGLELOGIN] = (state, action) => ({
  ...state,
  loggedIn: state.loggedIn ? false : true,
});

handlers[actions.TOGGLEMODAL] = (state, action) => ({
  ...state,
  modal: state.modal ? false : true,
});

const reducer = createReducer(initialState, handlers);

export { handlers, initialState, reducer };
