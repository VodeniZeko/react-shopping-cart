import React, { useContext } from "react";
import { movieDataContext } from "../contexts/ProductContext";
// Components
import Product from "./Product";

const Products = props => {
  const { products, addItem } = useContext(movieDataContext);
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
