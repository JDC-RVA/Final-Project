import React from "react";

import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const ProductInfoBootstrap = props => {
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
        <Button color="success">ADD TO CART</Button>
      </CardBody>

      {/* </Card> */}
    </div>
  );
};

export default ProductInfoBootstrap;
