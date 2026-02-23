import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;