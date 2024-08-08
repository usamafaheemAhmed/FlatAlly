// src/routes.jsx
import React from "react";

import { MdHome } from "react-icons/md";
import Home from "../Public/Home";
import DynamicComp from "../../assets/DynamicComps/DynamicComp";
import About from "../Public/About";
import Contact from "../Public/Contact";

const PuRoutes = [
    {
        name: "Home",
        layout: "/",
        path: "",
        icon: <MdHome />,
        component: <Home />,
    },
    {
        name: "About",
        layout: "/",
        path: "About",
        icon: <MdHome />,
        component: <About />,
    },
    {
        name: "Contact",
        layout: "/",
        path: "Contact",
        icon: <MdHome />,
        component: <Contact />,
    },
    // Add more routes here as needed
];

export default PuRoutes;
