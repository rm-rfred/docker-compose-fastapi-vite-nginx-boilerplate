import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Root from "./routes/root";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
];

export const router = createBrowserRouter(routes);
