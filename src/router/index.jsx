import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import LayoutPublic from "../layouts/LayoutPublic";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import JewelryList from "../pages/JewelryList";


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
            {
                path: '/login',
                index: true,
                element: <Login />,
            },{
                path: '/contact',
                index: true,
                element: <Contact />,
            },{
                path: '/jewelryList',
                index: true,
                element: <JewelryList />,
            },
        ],
    },
])