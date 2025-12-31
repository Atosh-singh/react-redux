import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  // const selector = useSelector((state) => state.cart.value)
  const cartSelector = useSelector((state) => state.cart.items);
  // console.log(selector)
  console.log(cartSelector.length);
  return (
    <Link to="/cart">
      <div className="cart">
        <img
          src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png"
          alt=""
          className="cart-icon"
        />
        <span className="cart-count">
          {cartSelector.length ? cartSelector.length : 0}
        </span>
      </div>
    </Link>
  );
};

export default AddToCart;
