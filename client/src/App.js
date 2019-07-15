import React, { Component } from "react";
import "./App.css";
import ProductContainer from "./components/ProductContainer";
import products from "./products.json";

import BootstrapNavbar from "./components/BootstrapNavbar";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Banner from "./components/Banner";

class App extends Component {
  state = {
    products
  };

  // Map over this.state.products and render a ProductCard component for each product object
  render() {
    return (
      <div>
        <BootstrapNavbar />
        <Banner />
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
export default App;
