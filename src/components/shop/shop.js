import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [items, setItems] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) =>{
      const newCart = [...cart, product];
      setCart(newCart);
  }
  return (
    <div className="shop-container">
      <div className="products-container">
        {items.map((item) => (
          <Product 
          item={item}
          handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
