// src/routes.jsx
import React from "react";

import { MdHome } from "react-icons/md";
import Home from "../Public/Home";
import About from "../Public/About";
import Contact from "../Public/Contact";
import SearchBook from "../Public/SearchBook";
import LoginForm from "../login/LoginForm";
import Register from "../login/Register";

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
    {
        name: "Search",
        layout: "/",
        path: "Search",
        icon: <MdHome />,
        component: <SearchBook />,
    },
    {
        name: "Login",
        layout: "/",
        path: "Login",
        icon: <MdHome />,
        component: <LoginForm />,
    },
    {
        name: "Register",
        layout: "/",
        path: "Register",
        icon: <MdHome />,
        component: <Register />,
    },
    // Add more routes here as needed
];

export default PuRoutes;
