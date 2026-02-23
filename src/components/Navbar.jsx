import React from "react";

function Navbar({ setShowProducts, setShowCart }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      backgroundColor: "green",
      color: "white"
    }}>
      <h2 style={{ cursor: "pointer" }} onClick={() => {
        setShowProducts(false);
        setShowCart(false);
      }}>
        Paradise Nursery
      </h2>

      <div>
        <button onClick={() => {
          setShowProducts(true);
          setShowCart(false);
        }}>
          Products
        </button>

        <button onClick={() => {
          setShowProducts(false);
          setShowCart(true);
        }}>
          Cart
        </button>
      </div>
    </nav>
  );
}

export default Navbar;