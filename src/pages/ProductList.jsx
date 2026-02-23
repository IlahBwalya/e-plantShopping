import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 },
    { id: 3, name: "Peace Lily", price: 20 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Plant Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;