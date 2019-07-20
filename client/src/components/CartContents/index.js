import React from "react";
import { Table } from "reactstrap";

export default class CardContent extends React.Component {
  render() {
    let rows = this.props.products.map((product, index) => {
      return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}
