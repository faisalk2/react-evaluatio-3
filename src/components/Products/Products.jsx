import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from './Product/Product'

const Products = () => {
  const [product,setProduct]=useState([]);
  
  useEffect(()=>{
    
    axios.get("http://localhost:8080/products").then(res=>setProduct(res.data));
  },[])
  return <div>
  
  { product.map((item)=>{
     return  <Product key={item.id} item={item}></Product>
    })}
  
    
    </div>;
};

export default Products;
