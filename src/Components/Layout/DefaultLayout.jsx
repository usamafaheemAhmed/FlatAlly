// src/Components/Layout/Default.jsx
import React from "react";
import Footer from "../navigation/Footer";
import TopNav from "../navigation/TopNav";

function DefaultLayout({ children }) {
    return (
        <div>
            <TopNav />
            {/* Add your layout components like header, footer, etc. here */}
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
