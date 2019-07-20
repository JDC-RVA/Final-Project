import React from "react";
import { Table } from "reactstrap";

export default class CardContent extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
