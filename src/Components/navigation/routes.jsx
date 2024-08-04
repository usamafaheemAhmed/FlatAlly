// src/routes.jsx
import React from "react";

import { MdHome } from "react-icons/md";
import Home from "../Public/Home";
import DynamicComp from "../../assets/DynamicComps/DynamicComp";

const routes = [
    {
        name: "Home",
        layout: "/",
        path: "home",
        icon: <MdHome />,
        component: <Home />,
    },
    {
        name: "DynamicComp",
        layout: "/",
        path: "DynamicComp",
        icon: <MdHome />,
        component: <DynamicComp />,
    },
    // Add more routes here as needed
];

export default routes;
