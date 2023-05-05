import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/Home/Home";
import Blog from "../../pages/Blog/Blog";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ChefRecipes from "../../pages/ChefRecipes/ChefRecipes";
import { serverData } from "../../loader/getData";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    loader: serverData,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=>fetch('https://seoul-kitchenista-server-apurbahasanj.vercel.app/banner-food')
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: `/recipes/:id`,
        element: (
          <PrivateRoute>
            <ChefRecipes />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
