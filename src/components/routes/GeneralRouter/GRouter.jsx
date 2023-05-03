import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/Home/Home";
import Blog from "../../pages/Blog/Blog";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ChefRecipes from "../../pages/ChefRecipes/ChefRecipes";
import { serverData } from "../../loader/getData";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        loader: serverData,
        children: [
            {
                path: '/',
                element: <Home/>,
                
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: `/recipes/:id`,
                element: <ChefRecipes/>,
            }
        ]
    }
])
export default router;