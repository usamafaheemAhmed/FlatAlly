// src/Components/Layout/Default.jsx
import React from "react";
import Footer from "../navigation/Footer";
import TopNav from "../navigation/TopNav";

function AuthLayout({ children }) {
    return (
        <div>
            {/* Add your layout components like header, footer, etc. here */}
            {children}
        </div>
    );
}

export default AuthLayout;
