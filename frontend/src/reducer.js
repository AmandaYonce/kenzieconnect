import { actions } from "./components/actions";
import { createReducer } from "./components/helpers";

const initialState = {
  profile: [],
  survey: [],
  loggedIn: false,
  user: "",
  modal: false,
  token: null,
  users: [],
  page: { start: 0, end: 3 },
  matchScores: [],
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

handlers[actions.USERS] = (state, action) => ({
  ...state,
  users: action.users,
});

handlers[actions.NAVIGATE] = (state, action) => {
  if (
    state.page.start + action.value <= state.users.length &&
    state.page.start + action.value >= 0
  ) {
    return {
      ...state,
      page: {
        ...state.page,
        start: state.page.start + action.value,
        end: state.page.end + action.value,
      },
    };
  }
};

handlers[actions.MATCHSCORES] = (state, action) => ({
  ...state,
  matchScores: action.matchScores,
});

const reducer = createReducer(initialState, handlers);

export { handlers, initialState, reducer };
