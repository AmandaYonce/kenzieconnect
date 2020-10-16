import React from "react";
import { Home } from "./components/landingpage";
import PenPal from "./components/penpal";
import Profile from "./components/profile";
// import Auth from "./components/loginSignup";
import Main from "./components/main";
import Survey from "./components/survey";
import Winks from './components/winks'
import { useLocation } from "react-router-dom";
import { routeDispatcher } from "./components/helpers";
import NotFound from "./components/notfound";
import { StateContext } from "./App";

const Routes = () => {
  let path = useLocation();
  const { state } = React.useContext(StateContext);
  let { pathname } = path;
  const loggedIn = window.localStorage.getItem("key") || state.loggedIn;
  // console.log(loggedIn?"true":"false")
  // console.log(pathname);
  pathname==="/logout/"&& localStorage.clear()
  // const logOutMatch = useRouteMatch({ path: "/logout/", exact: true });

  let routes = [];

  let urls = {
    PenPal: { path: /^\/messages\//, PenPal },
    Home: { path: /^\/home\//, Home },
    Survey: { path: /^\/survey\/$/, Survey },
    Winks: {path: /^\/winks\/$/, Winks },
    Profile: {
      path: /^\/profile\//,
      Profile,
    },
    Main: { path: /^\/$|\/logout\//, Main },
  };

  for (const key in urls) {
    // console.log(urls[key][key]);
    // console.log(urls[key].path);
    // console.log(urls[key].path.test(pathname));

    if (urls[key].path.test(pathname)) {
      routes = [
        ...routes,
        {
          match: urls[key].path.test(pathname),
          component: urls[key][key],
        },
      ];
      // return loggedIn ? routeDispatcher(routes) : <Main />;
      return routeDispatcher(routes)
    }
  }

  routes = [{ match: true, component: NotFound }];

  return routeDispatcher(routes);
  // return routeDispatcher(routes);
};

export default Routes;
