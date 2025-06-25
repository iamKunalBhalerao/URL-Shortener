import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import { homeRoute } from "./Homepage.route";
import { dashboardRoute } from "./Dashboard.route";
import { signInRoute, signUpRoute } from "./auth.route";

export const rootRoute = createRootRoute({
  component: App
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  dashboardRoute,
  signUpRoute,
  signInRoute,
]);
