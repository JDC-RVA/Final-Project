import React, { Component } from "react";

import ProductContainer from "./components/ProductContainer";
import products from "./products.json";

import BootstrapNavbar from "./BootstrapNavbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

class MainPage extends Component {
  state = {
    products
  };

  // Map over this.state.products and render a ProductCard component for each product object
  render() {
    return (
      <div>
        <BootstrapNavbar />
        <Router>
          <div>
            <Route exact path="/" component={ProductContainer} />
            <Route exact path="/product/:id" component={ProductDetail} />
          </div>

          <Footer />
        </Router>
      </div>
    );
  }
}
export default MainPage;
