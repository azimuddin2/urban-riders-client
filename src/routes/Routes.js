import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import RiderService from "../pages/RiderService/RiderService";
import Search from "../pages/Search/Search";
import Contact from "../pages/Contact/Contact";
import Destination from "../pages/Destination/Destination";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import NotFound from "../pages/Shared/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rider-service/:id',
                element: <PrivateRoute>
                    <RiderService></RiderService>
                </PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://urban-riders-server.vercel.app/service/${params.id}`)
                }
            },
            {
                path: '/search/:id',
                element: <Search></Search>,
                loader: ({ params }) => {
                    return fetch(`https://urban-riders-server.vercel.app/service/${params.id}`)
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