import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";
import AboutUs from "./pages/AboutUs";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Navbar
        setShowProducts={setShowProducts}
        setShowCart={setShowCart}
      />

      {!showProducts && !showCart && <AboutUs />}

      {showProducts && <ProductList />}

      {showCart && <CartItem />}
    </div>
  );
}

export default App;