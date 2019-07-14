import React from "react";
import "./style.css";
import ProductCard from "../ProductCard";
import products from "../../products.json";

function ProductContainer() {
  return (
    <div className="ProductContainer">
      {products.map(product => (
        <ProductCard
          id={product.id}
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductContainer;
