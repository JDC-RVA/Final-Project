import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import "./style.css";
import products from "../../products.json";
import YoutubeNode from "../../components/YoutubeNode";
import ProductInfoBootstrap from "../../components/ProductInfoBootstrap";
import ProductCarousel from "../../components/ProductCarousel";

class ProductDetail extends Component {
  render() {
    // console.log(this.props);
    let product = products.find(
      eachProduct => eachProduct.id.toString() === this.props.match.params.id
    );
    // console.log(product);
    return (
      <div>
        <Container>
          <Row>
            <Col xs="8">
              <ProductCarousel
                id={product.id}
                key={"Carousel_" + product.id}
                image={product.image}
              />
            </Col>
            <Col xs="4">
              <ProductInfoBootstrap
                id={product.id}
                key={"Product_" + product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
              />{" "}
            </Col>{" "}
          </Row>
        </Container>
        <YoutubeNode name={product.name} key={product.id} />
      </div>
    );
  }
}

export default ProductDetail;
