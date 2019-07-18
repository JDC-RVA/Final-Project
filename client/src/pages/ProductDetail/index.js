import React, { Component } from "react";
// import "./style.css";
import products from "../../products.json";
import ProductInfo from "../../components/ProductInfo";
import YoutubeNode from "../../components/YoutubeNode";
import ProductInfoBootstrap from "../../components/ProductInfoBootstrap";
import ProductCarousel from "../../components/ProductCarousel";

class ProductDetail extends Component {
  render() {
    console.log(this.props);
    let product = products.find(
      eachProduct => eachProduct.id.toString() === this.props.match.params.id
    );
    console.log(product);
    return (
      <div>
        <ProductCarousel
          id={product.id}
          key={product.id}
          image={product.image}
        />
        <ProductInfoBootstrap
          id={product.id}
          key={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
        />
        {/* <ProductInfo
          id={product.id}
          key={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
        /> */}
        {/* <YoutubeHTTP /> */}
        <YoutubeNode name={product.name} />
      </div>
    );
  }
}

export default ProductDetail;
