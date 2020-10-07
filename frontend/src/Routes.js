import Landing from "./components/landingpage";
import PenPal from "./components/penpal";
import Profile from "./components/profile";
// import Auth from "./components/loginSignup";
import Main from './components/main'
import NewUserReg from "./components/newUserReg";
import { useRouteMatch } from "react-router-dom";
import { routeDispatcher } from "./components/helpers";

export const Routes = () => {
  const matches = [
    { match: useRouteMatch({ path: "/", exact: true }), component: Main },
    {
      match: useRouteMatch({ path: "/home", exact: true }),
      component: Landing,
    },
    {
      match: useRouteMatch({ path: "/profile/:username", exact: true }),
      component: Profile,
    },
    {
      match: useRouteMatch({ path: "/messages/:username", exact: true }),
      component: PenPal,
    },
    {
      match: useRouteMatch({ path: "/register/", exact: true }),
      component: NewUserReg,
    },
  ];

  return routeDispatcher(matches);
};

export default Routes;
