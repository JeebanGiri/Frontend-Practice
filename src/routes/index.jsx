import AnonymousLayout from "../components/Layouts/AnonymousLayout/Anonymouslayout";
import MainLayout from "../components/Layouts/MainLayout/MainLayout";
import Home from "../components/pages/Home/home";
import Register from "../components/Authentication/Register/register";
import Login from "../components/Authentication/Login/login";
import DashBoard from "../components/Dashboard/CustomerDashboard";
import Profile from "../components/Dashboard/profile";
import Logout from "../components/Authentication/logout";
import { renderRoutes } from "./generate-routes";

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "homes",
        title: "home page",
        component: Home,
        path: "/",
        isPublic: true,
      },
      {
        name: "register",
        title: "register page",
        component: Register,
        path: "/register",
        isPublic: true,
      },
      {
        name: "login",
        title: "lofin page",
        component: Login,
        path: "/login",
        isPublic: true,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: "home",
        title: "home page",
        component: Home,
        path: "/",
      },
      {
        name: "dashboard",
        title: "dashboard page",
        component: DashBoard,
        path: "/dashboard",
        routes: [
          {
            name: "profile",
            title: "Profile page",
            component: Profile,
            path: "/profile",
          },
          {
            name: "logout",
            title: "Logout page",
            component: Logout,
            path: "/logout",
          },
        ],
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
