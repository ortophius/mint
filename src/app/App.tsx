import { Route, Routes } from "react-router-dom";

import "./App.scss";
import "./colors.css";
import Home from "../pages/home/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
