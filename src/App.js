import React, { useState } from "react";
import ProductList from "./pages/ProductList";
import AboutUs from "./pages/AboutUs";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div>
      {!showProducts ? (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h1>Paradise Nursery</h1>
          <p>Your one-stop shop for beautiful houseplants.</p>

          <button onClick={handleGetStarted}>
            Get Started
          </button>

          <AboutUs />
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;