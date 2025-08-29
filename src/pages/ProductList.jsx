import { useEffect, useState } from "react";
import { CardShop } from "../components/CardShop.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import products from "../data/data.js";
import "./ProductList.css";

export const ProductList = () => {
  const [shopProduct, setShopProduct] = useState([]);
  const handleAdd = (product) => {
    setShopProduct((prev) => [...prev, product]);
    console.log(shopProduct);
  };
  useEffect(() => {
    console.log(shopProduct);
  }, [shopProduct]);
  return (
    <section className="container-product-list">
      <div className="products">
        <h2>Desserts</h2>
        <ul className="list">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} onAdd={handleAdd} />
          ))}
        </ul>
      </div>
      <CardShop />
    </section>
  );
};
