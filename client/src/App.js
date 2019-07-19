import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import products from "./products.json";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Footer from "./components/Footer";
import ProductContainer from "./pages/ProductContainer";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

class App extends Component {
  state = {
    products
  };

  // Map over this.state.products and render a ProductCard component for each product object
  render() {
    return (
      <div>
        <Router>
          <BootstrapNavbar />

          <div className="contentContainer">
            <Route exact path="/" component={ProductContainer} />
            <Route exact path="/product/:id" component={ProductDetail} />
            <Route exact path="/cart" component={Cart} />
          </div>

          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
