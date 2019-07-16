import React from "react";
import "./style.css";
import ProductCard from "../../components/ProductCard";
import products from "../../products.json";
import Banner from "../../components/Banner";

function ProductContainer() {
  return (
    <div>
      <Banner />
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
    </div>
  );
}

export default ProductContainer;
