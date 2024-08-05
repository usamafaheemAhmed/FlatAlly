// src/Components/navigation/PublicRouters.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdRoutes from "./AdRoutes";


function AdminRouters() {
    return (
        <Routes>
            {AdRoutes.map((route, index) => (
                <Route
                    key={index}
                    path={`${route.layout}${route.path}`}
                    element={route.component}
                />
            ))}
        </Routes>
    );
}

export default AdminRouters;
