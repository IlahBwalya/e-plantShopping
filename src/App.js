import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";
import AboutUs from "./pages/AboutUs";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing-page">
              <div className="landing-content">
                <h1>Welcome to Paradise Nursery</h1>
                <p>Your one-stop shop for beautiful plants</p>
              </div>
            </div>
          }
        />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;