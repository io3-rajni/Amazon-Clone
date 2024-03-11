import React from "react";
import { productApi } from "./ProductApi";
const ProductComponent = () => {
  console.log("productApi", productApi?.thumbnail);
  return <div></div>;
};

export default ProductComponent;
