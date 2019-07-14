import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Banner = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">RevMart</h1>
          <p className="lead">The one stop shop of the entire internet!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Banner;
