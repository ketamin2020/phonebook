import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./views/Homepage")),
    private: false,
    restricted: true,
  },

  {
    path: "/contacts",
    label: "Phonebook",
    exact: true,
    component: lazy(() => import("./views/Phonebook")),
    private: true,
    restricted: false,
  },

  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./views/Register")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./views/LogIn")),
    private: false,
    restricted: true,
  },
];
