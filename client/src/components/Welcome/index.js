import React from "react";
import "./style.css";

function Welcome(props) {
  return (
    <div className="text-center">
      <p id="welcome" color="secondary">
        Welcome {props.userName}!
      </p>
    </div>
  );
}

export default Welcome;
