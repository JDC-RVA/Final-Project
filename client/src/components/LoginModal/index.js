import React, { Component } from "react";
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavLink
} from "reactstrap";

class LoginModal extends Component {
  state = {
    visible: true,
    modalIsOpen: false
  };
  toggleAlert() {
    this.setState({
      visible: !this.state.visible
    });
  }
  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }
  render() {
    return (
      <Container>
        <NavLink
          color="secondary"
          href="#"
          onClick={this.toggleModal.bind(this)}
        >
          Login/Register
        </NavLink>
        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>
            Modal Title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem
            fugiat perspiciatis sint, nostrum labore nobis quidem sed impedit
            quae quisquam corrupti, libero commodi a quod pariatur quo qui. Id?
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Sign Up</Button>
            <Button color="secondary" onClick={this.toggleModal.bind(this)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default LoginModal;
