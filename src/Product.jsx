import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux-toolkit/slice";
import { fetchProducts } from "./redux-toolkit/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="grid">
      {products.map((item) => {
        const isInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        return (
          <div key={item.id} className="card">
            <img src={item.thumbnail} alt={item.title} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="price">${item.price}</div>
              <div className="rating">⭐ {item.rating}</div>

              {isInCart ? (
                <button
                  className="btn remove-button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove from Cart
                </button>
              ) : (
                <button className="btn" onClick={() => dispatch(addItem(item))}>
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
