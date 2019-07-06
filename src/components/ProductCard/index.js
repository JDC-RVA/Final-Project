import React from "react";
import "./style.css";

function ProductCard(props) {
  return (
    <div className="card" /*onClick={() => props.clickCount(props.id)}*/>
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
  );
}

export default ProductCard;
