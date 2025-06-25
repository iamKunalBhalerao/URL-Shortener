import React from "react";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./RouteTree";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

export const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: Signup,
});

export const signInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signin",
  component: Signin,
});