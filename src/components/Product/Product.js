import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, stock } = props.item;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-content">
        <h4 className="product-tile">{name}</h4>
        <p>
          <small>By : {seller}</small>
        </p>
        <h3>${price}</h3>
        <p>
          <small> Only {stock} left in stock - Order Soon</small>
        </p>
        <button onClick={() => props.handleAddProduct(props.item)} className="button"> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
