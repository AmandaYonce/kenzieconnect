import { actions } from "./components/actions";
import { createReducer } from "./components/helpers";

const initialState = {
  profile: [],
  survey: [],
  loggedIn: false,
  user: "",
  modal: false,
  token: null,
  users:[]
};

const handlers = {};

handlers[actions.PROFILE] = (state, action) => ({
  ...state,
  profile: action.profile,
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

handlers[actions.USERS]=(state,action)=>({
  ...state, users:action.users
})

const reducer = createReducer(initialState, handlers);

export { handlers, initialState, reducer };
