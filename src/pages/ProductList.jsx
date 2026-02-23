import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    category: "Succulents"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    category: "Indoor"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    image: "https://images.unsplash.com/photo-1524593119773-1a6a6a2bfa4e",
    category: "Indoor"
  },
  {
    id: 4,
    name: "Cactus",
    price: 12,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    category: "Succulents"
  },
  {
    id: 5,
    name: "Fern",
    price: 20,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    category: "Outdoor"
  },
  {
    id: 6,
    name: "Bamboo Plant",
    price: 25,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    category: "Outdoor"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Plants</h1>

      {["Indoor", "Outdoor", "Succulents"].map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    width: "200px"
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    width="100%"
                  />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button
                    onClick={() => dispatch(addItem(product))}
                  >
                    Add to Cart
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