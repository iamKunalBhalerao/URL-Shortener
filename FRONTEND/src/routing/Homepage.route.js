import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./RouteTree";
import Home from "../pages/Home";
import { checkAuth } from "../utils/helper";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home ,
    beforeLoad: checkAuth,
});
