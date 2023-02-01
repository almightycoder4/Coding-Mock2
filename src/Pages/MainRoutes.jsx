import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import SingleProduct from "./SingleProducts";
const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Watches />} />; */}
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
