// src/Components/navigation/PublicRouters.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes.jsx";

function PublicRouters() {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={`${route.layout}${route.path}`}
                    element={route.component}
                />
            ))}
        </Routes>
    );
}

export default PublicRouters;
