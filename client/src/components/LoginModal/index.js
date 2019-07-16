import React, { Component } from "react";
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavLink,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input
  // FormText
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
            <div>
              <img alt="logo" src="/img/revmart logo.png" />
            </div>
          </ModalHeader>
          <ModalBody>
            <Row>
              <p className="mx-auto">Welcome to REVMART!</p>
            </Row>
            <Row>
              <p className="mx-auto">Please login or register as a new user.</p>
            </Row>

            <hr />
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Username</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Username"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Button
                className="form-control mt-2 btn btn-primary"
                color="primary"
              >
                Sign In
              </Button>
            </Form>
            <hr />
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Username</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Username"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Button
                className="form-control mt-2 btn btn-primary"
                color="success"
              >
                Register
              </Button>
            </Form>
          </ModalBody>

          <ModalFooter>
            {/* <Button color="secondary" onClick={this.toggleModal.bind(this)}>
              Cancel
            </Button> */}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default LoginModal;
