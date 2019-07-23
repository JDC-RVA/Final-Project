import React from "react";
import API from "../utils/API";
import "./style.css";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Button, CardBody, CardTitle, CardText } from "reactstrap";

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
        <Link to="/cart">
          <Button
            id="addToCart"
            color="success"
            onClick={() =>
              handleAddToCart(
                props.name,
                props.image,
                props.description,
                props.price
              )
            }
          >
            ADD TO CART
          </Button>
        </Link>
      </CardBody>
    </div>
  );
};

export default ProductInfoBootstrap;
