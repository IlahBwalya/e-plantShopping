import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav style={{ padding: "15px", background: "green", color: "white" }}>
      <Link to="/" style={{ marginRight: "20px", color: "white" }}>
        Products
      </Link>

      <Link to="/about" style={{ marginRight: "20px", color: "white" }}>
        About
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        Cart ({totalItems})
      </Link>
    </nav>
  );
}

export default Navbar;