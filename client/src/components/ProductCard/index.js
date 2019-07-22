import React from "react";
import "./style.css";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="card" id="productCard">
        <div className="img-container">
          <img alt={props.name} src={props.image[0]} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>{props.name}</strong>
            </li>
            <li>
              <strong>$ {props.price}</strong>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
