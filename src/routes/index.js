import LoginContainer from "./../modules/Login";
import SearchContainer from "./../modules/Search";

export const routes = [
  {
    exact: true,
    path: "/",
    component: LoginContainer
  },
  {
    exact: true,
    path: "/search",
    component: SearchContainer
  }
];
