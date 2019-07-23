import React from "react";
import API from "../utils/API";
import "./style.css";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CardBody, CardTitle, CardText } from "reactstrap";
import AddedToCartModal from "../../components/AddedToCartModal";

const ProductInfoBootstrap = props => {
  const handleAddToCart = (name, image, description, price) => {
    API.createCart(localStorage.getItem("userID"), {
      name,
      image,
      description,
      price
    })
      .then(res => {})
      .catch(err => console.log(err));
  };

  return (
    <div>
      <CardBody body inverse color="primary">
        <CardTitle tag="h3">{props.name}</CardTitle>
        <CardText>$ {props.price}</CardText>
        <CardText>{props.description}</CardText>
        <Link>
          {/* to="/cart" */}

          <AddedToCartModal
            name={props.name}
            image={props.image}
            description={props.description}
            price={props.price}
            handleAddToCart={handleAddToCart}
          />
        </Link>
      </CardBody>
    </div>
  );
};

export default ProductInfoBootstrap;
