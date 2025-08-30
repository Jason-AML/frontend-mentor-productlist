import { useState, useEffect } from "react";
import "./CardShop.css";
import noproduct from "../assets/images/illustration-empty-cart.svg";
import deleteimg from "../assets/images/icon-remove-item.svg";
export const CardShop = ({ productAdded, handleDelete }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sumaTotal = productAdded.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(sumaTotal);
  }, [productAdded]);
  return (
    <div className="container-cardshop">
      <div className="cardshop-info">
        <h3 className="cardshop-count">Your cart ({productAdded.length})</h3>
        {productAdded.length <= 0 ? (
          <div className="img-empty-car">
            <img src={noproduct} alt="" />
          </div>
        ) : (
          productAdded.map((product, index) => (
            <div key={index} className="container-itemshop">
              <div className="itemshop-info">
                <p className="product-title">{product.name}</p>
                <div className="item-price-acum">
                  <p className="product-quantity">{product.quantity}x</p>
                  <span className="product-price">${product.price}</span>
                </div>
              </div>
              <button
                className="btn-delete"
                onClick={() => handleDelete(product)}
              >
                <img src={deleteimg} alt="" />
              </button>
            </div>
          ))
        )}
        {productAdded.length > 0 && (
          <div className="container-confirm">
            <p>
              Order Total: <strong>${total}</strong>
            </p>
            <div className="container-btn">
              <button className="btn-confirm">Confirm Order</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
