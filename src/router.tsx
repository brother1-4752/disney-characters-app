import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { CharacterDetail, Main } from "./pages";

interface IRouter {
  path: string;
  element: React.ReactNode;
  children?: IRouter[];
}

const routerData: IRouter[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "/characters/:id",
        element: <CharacterDetail />,
      },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
