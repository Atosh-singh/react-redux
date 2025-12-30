import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux-toolkit/slice";
import { fetchProducts } from "./redux-toolkit/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);
  // console.log(productSelector);

  const cartSelector = useSelector((state) => state.cart.items);
  console.log(productSelector);

  return (
    <div className="grid">
      {productSelector.length &&
        productSelector.map((item) => (
          <div key={item.id} className="card">
            <img src={item.thumbnail} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="price">{item.price}</div>
              <div className="rating">{item.rating}</div>


              {
              cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                <button className="btn btn-disable">
                  Added in Cart
                </button>
              ) : (
                <button className="btn" onClick={() => dispatch(addItem(item))}>
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
    //     <div className='product-card'>
    //         <div className='product-image'>
    //             <img src="https://m.media-amazon.com/images/I/51KmxQjXBlL.jpg" alt="Product Image" />
    //         </div>

    // <div className='product-info'>
    //     <h1>Wireless Headphones</h1>
    //     <p className='price'>$129.99</p>
    //     <p className='description'>
    //         Experience high quality sound with these wireless Headphones.
    //         Featuring noise cancellation, long lasting battery life,
    //         and a sleek modern design for everyday use.
    //     </p>
    //     <button className='btn' onClick={()=> dispatch(addItem(1))}>Add to Cart</button>
    //     <button className='btn remove-button' onClick={() => dispatch(removeItem(1))}>Remove from Cart</button>
    // </div>
    //     </div>
  );
};

export default Product;
