import "./CardShop.css";
import { useState } from "react";
export const CardShop = () => {
  const [product, setProduct] = useState([]);
  return (
    <div className="container-cardshop">
      <div className="">
        <h3>Your order</h3>
        {!product.length === 0 ? (
          product.map(index)
        ) : (
          <span>no hay productos</span>
        )}
      </div>
    </div>
  );
};
