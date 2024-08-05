// src/routes.jsx
import React from "react";

import { MdHome } from "react-icons/md";
import Home from "../Public/Home";
import DynamicComp from "../../assets/DynamicComps/DynamicComp";

const PuRoutes = [
    {
        name: "Home",
        layout: "/",
        path: "",
        icon: <MdHome />,
        component: <Home />,
    },
    // Add more routes here as needed
];

export default PuRoutes;
