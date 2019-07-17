import React, { Component } from "react";
import API from "../utils/API";
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
    modalIsOpen: false,
    userName: "",
    password: ""
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, userName: "", password: "" })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password) {
      API.saveUser({
        userName: this.state.userName,
        password: this.state.password
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

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
              <img alt="logo" src="/img/revmart-logo.png" />
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
                      type="username"
                      name="userName"
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
                      placeholder="Password"
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
                      value={this.state.userName}
                      onChange={this.handleInputChange}
                      type="email"
                      name="userName"
                      placeholder="Username"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Button
                disabled={!(this.state.userName && this.state.password)}
                onClick={this.handleFormSubmit}
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
