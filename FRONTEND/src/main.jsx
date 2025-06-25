import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routing/RouteTree";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const myQueryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    myQueryClient,
    store,
  },
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={myQueryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
