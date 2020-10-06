import { createReducer } from "./helpers";
import { actions } from "./actions";

const initialState = {
  list: [],
};

const handlers = {};

handlers[actions.LIST] = (state, action) => ({ ...state, list: action.list });

export { createReducer, handlers, initialState };
