import React from "react";
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img alt="logo" src="/img/revmart-logo_transparent.png" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {this.state.userName ? (
                  <Welcome userName={this.state.userName} />
                ) : (
                  <Modal updateName={this.updateNav} />
                )}
              </NavItem>
              {/* <Router> */}
              <Link to={"/cart"}>
                <i className="fas fa-shopping-cart fa-2x" id="cart" />
              </Link>
              {/* </Router> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
