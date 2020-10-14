import React from "react";
import { Home } from "./components/landingpage";
import PenPal from "./components/penpal";
import Profile from "./components/profile";
// import Auth from "./components/loginSignup";
import Main from "./components/main";
import Survey from "./components/survey";
import { Redirect, useLocation, useRouteMatch } from "react-router-dom";
import { routeDispatcher } from "./components/helpers";
import NotFound from "./components/notfound";

const Routes = () => {
  let { pathname } = useLocation();
  // console.log(pathname);

  const logOutMatch = useRouteMatch({ path: "/logout/", exact: true });
  
  if (logOutMatch) {
    return <Redirect to="/" />;
  }
  

  let routes = [];

  let urls = {
    PenPal: { path: /\/messages\/\w+$/, PenPal },
    Home: { path: /\/home\//, Home },
    Survey: { path: /\/survey\/$/, Survey },
    Profile: {
      path: /\/profile\/\w+$/,
      Profile,
    },
    Main: { path: /^\/$/, Main },
  };

  for (const key in urls) {
    // console.log(urls[key][key]);

    if (urls[key].path.test(pathname)) {
      routes = [
        ...routes,
        {
          match: urls[key].path.test(pathname),
          component: urls[key][key],
        },
      ];
      return routeDispatcher(routes);
    }
  }

  routes = [{ match: true, component: NotFound }];

  // return loggedIn ? routeDispatcher(routes):<Main/>
  return routeDispatcher(routes);
};

export default Routes;
