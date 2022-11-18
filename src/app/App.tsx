import { Route, Routes } from "react-router-dom";

import "./App.scss";
import "./colors.css";
import Home from "../pages/home/Home";
import { CheckoutPage } from "../pages/checkout/checkoutPage";
import { StatusPage } from "../pages/status/statusPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="success" element={<StatusPage />} />
    </Routes>
  );
};

export default App;
