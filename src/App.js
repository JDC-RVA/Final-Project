import React, { Component } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Wrapper from "./components/Wrapper";
import products from "./products.json";

// function App() {
//   return (
//     <div className="App">
//       <h1>HELLO</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    products
  };

  // Map over this.state.products and render a ProductCard component for each product object
  render() {
    return (
      <Wrapper>
        {this.state.products.map(product => (
          <ProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
