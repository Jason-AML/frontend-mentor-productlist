import { useState, useEffect } from "react";
import { CardShop } from "../components/CardShop.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import products from "../data/data.js";
import "./ProductList.css";

export const ProductList = () => {
  const [shopProduct, setShopProduct] = useState([]);

  const handleDelete = (productToDelete) => {
    const productIndex = shopProduct.findIndex(
      (item) => item.name === productToDelete.name
    );
    if (productIndex !== -1) {
      const updatedProducts = [...shopProduct];
      if (updatedProducts[productIndex].quantity > 1) {
        updatedProducts[productIndex].quantity -= 1;
      } else {
        updatedProducts.splice(productIndex, 1);
      }
      setShopProduct(updatedProducts);
    }
  };

  const handleAdd = (product) => {
    const productIndex = shopProduct.findIndex(
      (item) => item.name === product.name
    );
    if (productIndex !== -1) {
      const updatedProducts = [...shopProduct];
      updatedProducts[productIndex].quantity += 1;
      setShopProduct(updatedProducts);
    } else {
      const newProduct = { ...product, quantity: 1 };
      setShopProduct((prev) => [...prev, newProduct]);
    }
  };

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
      <CardShop productAdded={shopProduct} handleDelete={handleDelete} />
    </section>
  );
};
