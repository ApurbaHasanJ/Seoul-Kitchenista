import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/Home/Home";
import Blog from "../../pages/Blog/Blog";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    }
])
export default router;