import React from "react";
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row
} from "reactstrap";
import Modal from "../LoginModal";
import Welcome from "../Welcome";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class BootstrapNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      userName: ""
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    this.updateNav();
  }

  updateNav = () => {
    // console.log("update");
    this.setState({
      userName: localStorage.getItem("username"),
      isLoading: false
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand href="/">
            <img alt="logo" src="/img/revmart-logo_transparent.png" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {this.state.userName ? (
                  [
                    <Row>
                      <Welcome userName={this.state.userName} />
                      <Link to={"/cart"}>
                        <img src="/img/cart2.png" id="cart" alt-text="cart" />
                      </Link>
                      <NavLink
                        color="secondary"
                        href="#"
                        onClick={() => localStorage.clear()}
                      >
                        Log Out <i class="fas fa-sign-out-alt" />
                      </NavLink>
                    </Row>
                  ]
                ) : (
                  <Modal updateName={this.updateNav} />
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
