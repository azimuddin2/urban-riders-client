import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Contact from "../pages/Contact/Contact";
import Destination from "../pages/Destination/Destination";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => {
                    return fetch('services.json')
                }
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'destination',
                element: <PrivateRoute>
                    <Destination></Destination>
                </PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;