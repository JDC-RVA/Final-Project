import React from "react";
import API from "../utils/API";

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
      {/* <Card> */}
      {/* <CardHeader tag="h3"> {props.name}</CardHeader> */}

      {/* <div className="img-container">
        <img alt={props.name} src={props.image[0]} />
      </div> */}
      <CardBody body inverse color="primary">
        <CardTitle tag="h3">{props.name}</CardTitle>
        <CardText>$ {props.price}</CardText>
        <CardText>{props.description}</CardText>
        <Button
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
      </CardBody>

      {/* </Card> */}
    </div>
  );
};

export default ProductInfoBootstrap;
