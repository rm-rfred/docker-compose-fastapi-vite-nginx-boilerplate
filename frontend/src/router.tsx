import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Root from "./routes/root";
import NotFound from "./components/Common/NotFound";

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [{ index: true, element: <Home /> }],
  },
];

export const router = createBrowserRouter(routes);
