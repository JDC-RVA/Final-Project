import React, { Component } from "react";
import "./style.css";
import {
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText
} from "reactstrap";
import products from "../../products.json";

class Cart extends Component {
  render() {
    let product = products.find(
      eachProduct => eachProduct.id.toString() === this.props.match.params.id
    );
    return (
      <Container>
        <Row>
          <Col xs="6">
            {" "}
            <ListGroup>
              <ListGroupItem>
                Cras justo odio
                <i class="fas fa-trash-alt fa-1x float-right" />
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs="6">
            {" "}
            <Card body className="text-center">
              <CardTitle id="cardTitle">Order Summary</CardTitle>
              <CardText>Subtotal:</CardText>
              <CardText>Tax:</CardText>
              <CardText>Total:</CardText>
              <Button>CHECKOUT</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cart;
