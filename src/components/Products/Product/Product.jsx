import axios from "axios";
import React, { useState } from "react";


// http://localhost:8080/products
//   http://localhost:8080/cartItems

const Product = ({item}) => {
  const [count,setCount]=useState(1);
  
  return (
    <div data-cy={`product-${item.id}`}  >
      <h3 data-cy="product-name">{item.name}</h3>
      <h6 data-cy="product-description">{item.description}</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCount(count+1)}>+</button>
        <span data-cy="product-count">
          {
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setCount(count-1)} >-</button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;
