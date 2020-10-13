import { actions } from "./components/actions";
import { createReducer } from "./components/helpers";

const initialState = {
  profile: [],
  survey: [],
  loggedIn: false,
  user: "kyle",
  modal: false,
  token: null,
};

const handlers = {};

handlers[actions.Profile] = (state, action) => ({
  ...state,
  list: action.profile,
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

handlers[actions.TOKEN] = (state, action) => ({
  ...state,
  token: action.token,
});

const reducer = createReducer(initialState, handlers);

export { handlers, initialState, reducer };
