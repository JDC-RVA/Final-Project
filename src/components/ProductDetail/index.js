import React, { Component } from "react";
// import "./style.css";
import products from "../../products.json";
import ProductInfo from "../ProductInfo";
import YoutubeHTTP from "../YoutubeHTTP";
import YoutubeNode from "../YoutubeNode";
class ProductDetail extends Component {
  render() {
    console.log(this.props);
    let product = products.find(
      eachProduct => eachProduct.id.toString() === this.props.match.params.id
    );
    console.log(product);
    return (
      <div>
        <ProductInfo
          id={product.id}
          key={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
        />
        <YoutubeHTTP />
        <YoutubeNode />
      </div>
    );
  }
}

export default ProductDetail;
