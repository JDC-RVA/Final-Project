import React from "react";

function Welcome(props) {
  return (
    <div className="text-center">
      <p color="secondary">Welcome {props.userName}!</p>
    </div>
  );
}

export default Welcome;
