import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  clearAllItems,
  increaseQuantity,
  decreaseQuantity,
} from "./redux-toolkit/slice";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    dispatch(clearAllItems());
    alert("Order placed ✅");
    navigate("/");
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart Items</h2>
        <span>{cartItems.length} items</span>
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <img src={item.thumbnail} alt={item.title} />
              <div className="item-details">
                <h4>{item.title}</h4>
                <p>{item.brand}</p>
              </div>
            </div>

            <div className="item-actions">
              <div className="qty-box">
                <button
                  className="qty-btn"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>

                <span className="qty">{item.quantity}</span>

                <button
                  className="qty-btn"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>

              <div className="item-price">
                <span className="price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  className="btn remove-button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>
          Cart is Empty 🛒
        </h3>
      )}

      {cartItems.length > 0 && (
        <>
          <div className="cart-footer">
            <h3>Total : ${totalPrice.toFixed(2)}</h3>
          </div>

          <button className="btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default CartList;
