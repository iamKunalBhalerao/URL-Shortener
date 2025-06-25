import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import {routeTree} from "./routing/RouteTree";

const router = createRouter({ routeTree })

const myQueryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={myQueryClient}>
     <RouterProvider router={router} />
  </QueryClientProvider>
);
