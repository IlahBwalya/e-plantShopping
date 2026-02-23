import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  { id: 1, name: "Aloe Vera", price: 10, image: "...", category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, image: "...", category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 18, image: "...", category: "Indoor" },
  { id: 4, name: "Cactus", price: 12, image: "...", category: "Succulents" },
  { id: 5, name: "Fern", price: 20, image: "...", category: "Outdoor" },
  { id: 6, name: "Bamboo", price: 25, image: "...", category: "Outdoor" }
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems([...addedItems, product.id]);
  };

  return (
    <div>
      <h1>Our Plants</h1>

      {["Indoor", "Outdoor", "Succulents"].map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            {products
              .filter((p) => p.category === category)
              .map((product) => (
                <div key={product.id}>
                  <img src={product.image} alt={product.name} width="150" />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={addedItems.includes(product.id)}
                  >
                    {addedItems.includes(product.id)
                      ? "Added"
                      : "Add to Cart"}
                  </button>

                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;