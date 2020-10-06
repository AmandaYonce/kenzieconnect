import { actions } from "./components/actions";
import { createReducer } from "./components/helpers";

const initialState = {
  list: [],
};

const handlers = {};

handlers[actions.LIST] = (state, action) => ({ ...state, list: action.list });

const reducer = createReducer(initialState, handlers);

export { handlers, initialState, reducer };
