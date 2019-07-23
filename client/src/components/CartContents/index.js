import React from "react";
import { Table } from "reactstrap";
import API from "../utils/API";

export default class CardContent extends React.Component {
  render() {
    const handleDeleteProduct = id => {
      API.deleteProduct(id)
        .then(res => this.props.loadCart())
        .catch(err => console.log(err));
    };

    let rows = this.props.products.map((product, index) => {
      return (
        <tr key={product.id}>
          <th scope="row">
            <i
              className="far fa-trash-alt"
              onClick={() => handleDeleteProduct(product.id)}
            />
          </th>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
    return (
      <Table>
        <thead>
          <tr>
            <th>Delete</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}
