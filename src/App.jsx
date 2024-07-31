
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Default from "./Components/Layout/Default";
import Home from "./Components/Public/Home";
import "./App.css";



function App() {

  return (
    <div>
      <Default>

        {/* Main 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>*/}
        <Home />

      </Default>
    </div>
  )
}

export default App
