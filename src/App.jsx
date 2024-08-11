// src/App.jsx
import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PublicRouters from "./Components/navigation/PublicRouters.jsx";
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Layout/Admin.jsx";
import DefaultLayout from "./Components/Layout/DefaultLayout.jsx";
import AdminRouters from "./Components/navigation/AdminRouters.jsx";
import ScrollToTop from "./assets/ScrollToTop.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<DefaultLayout><PublicRouters /></DefaultLayout>} />
        <Route path="/auth/*" element={<authLayout><PublicRouters /></authLayout>} />
        <Route path="/admin/*" element={<Admin><AdminRouters /></Admin>} />
      </Routes>
    </div>
  );
}

export default App;
