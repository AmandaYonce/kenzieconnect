import React from "react";
import Routes from "./Routes";
import { reducer, initialState } from "./reducer";
import "./main.css"

export const StateContext = React.createContext();

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Routes />
    </StateContext.Provider>
  );
};

export default App;
