import React, { Component } from "react";
import "./style.css";
import {
  // ListGroup,
  // ListGroupItem,
  Container,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText
} from "reactstrap";
import CartContent from "../../components/CartContents";
import API from "../../components/utils/API";
// import products from "../../products.json";

class Cart extends Component {
  state = {
    products: [],
    subtotal: 0,
    tax: 0,
    total: 0
  };
  componentDidMount() {
    API.getCart(localStorage.getItem("userID"))
      .then(res => {
        let prices = res.data.map(item => item.price);
        let subTotal = prices.reduce((total, price) => {
          let sum = parseFloat(total) + parseFloat(price);
          return sum.toFixed(2);
        }, 0);
        let calculatedTax = (subTotal * 0.053).toFixed(2);
        let total = (parseFloat(subTotal) + parseFloat(calculatedTax)).toFixed(
          2
        );
        this.setState({
          products: res.data,
          subtotal: subTotal,
          tax: calculatedTax,
          total
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    // let product = products.find(
    //   eachProduct => eachProduct.id.toString() === this.props.match.params.id
    // );
    return (
      <Container>
        <Row>
          <Col xs="6">
            <CartContent products={this.state.products} />
          </Col>
          <Col xs="6">
            {" "}
            <Card body className="text-center">
              <CardTitle id="cardTitle">Order Summary</CardTitle>
              <CardText>Subtotal: $ {this.state.subtotal}</CardText>
              <CardText>Tax (5.3%): $ {this.state.tax}</CardText>
              <CardText>Total: $ {this.state.total}</CardText>
              <Button>CHECKOUT</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cart;
