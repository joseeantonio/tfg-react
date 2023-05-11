import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import LayoutPublic from "../layouts/LayoutPublic";
import Register from "../pages/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        // errorElement: <Error />,
        children: [
            {
                path: '/',
                index: true,
                element: <Home />,
            },{
                path: '/register',
                index: true,
                element: <Register />,
            },
        ],
    },
])