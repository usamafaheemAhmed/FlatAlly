// src/App.jsx
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PublicRouters from "./Components/navigation/PublicRouters.jsx";
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Layout/Admin.jsx";
import DefaultLayout from "./Components/Layout/DefaultLayout.jsx";
import AdminRouters from "./Components/navigation/AdminRouters.jsx";
import ScrollToTop from "./assets/ScrollToTop.jsx";

function App() {


  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<DefaultLayout><PublicRouters /></DefaultLayout>} />
        <Route path="/admin/*" element={<Admin><AdminRouters /></Admin>} />
      </Routes>
    </div>
  );
}

export default App;
