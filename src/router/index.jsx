import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import LayoutPublic from "../layouts/LayoutPublic";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Jewelry from "../pages/Jewelry";
import Jewel from "../pages/Jewel";
import Profile from "../pages/Profile";
import ShoppingCart from "../pages/ShoppingCart";
import TypeJewel from "../pages/TypeJewel";
import Orders from "../pages/Orders";
import OneOrder from "../pages/OneOrder";


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
            },{
                path: '/login',
                index: true,
                element: <Login />,
            },{
                path: '/contact',
                index: true,
                element: <Contact />,
            },{
                path: '/jewelry',
                index: true,
                element: <Jewelry />,
            },{
                path: '/jewel/:id',
                index: true,
                element: <Jewel />,
            },{
                path: '/profile',
                index: true,
                element: <Profile />,
            },{
                path: '/shoppingCart',
                index: true,
                element: <ShoppingCart />,
            },{
                path: '/jewerly/:type',
                index: true,
                element: <TypeJewel />,
            },{
                path: '/orders',
                index: true,
                element: <Orders />,
            },{
                path: '/oneOrder/:id',
                index: true,
                element: <OneOrder />,
            },
        ],
    },
])