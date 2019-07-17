import React from "react";

function Welcome(props) {
  return (
    <div className="text-center">
      <h3>Welcome {props.userName}!</h3>
    </div>
  );
}

export default Welcome;
