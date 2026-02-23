import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>

          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartItem;