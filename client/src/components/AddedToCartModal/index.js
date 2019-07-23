/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button
          id="addToCart"
          color="success"
          onClick={() => {
            this.props.handleAddToCart(
              this.props.name,
              this.props.image,
              this.props.description,
              this.props.price
            );
            this.toggle();
            return true;
          }}
        >
          ADD TO CART
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Product has been added to cart!
          </ModalHeader>
          <ModalBody>Thank you for your business!</ModalBody>
          <ModalFooter>
            <Link to="/">
              <Button color="primary" onClick={this.toggle}>
                Continue Shopping
              </Button>{" "}
            </Link>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
