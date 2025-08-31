import "./ProductCard.css";
import iconaddcar from "../assets/images/icon-add-to-cart.svg";

export const ProductCard = ({ product, onAdd }) => {
  return (
    <li className="card">
      <div className="card-img">
        <img src={product.image.thumbnail} alt="" className="product-img" />
        <button onClick={() => onAdd(product)} className="btn-addcard">
          <img
            src={iconaddcar}
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
          Add to car
        </button>
      </div>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <p className="product-name">{product.name}</p>
        <p className="product-price">
          <strong>${product.price}</strong>
        </p>
      </div>
    </li>
  );
};
