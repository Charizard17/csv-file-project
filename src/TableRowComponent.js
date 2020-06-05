import React, { Component } from "react";

class TableRowComponent extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.rowData[0]}</th>
        <td>{this.props.rowData[1]}</td>
        <td>{this.props.rowData[2]}</td>
        <td>{this.props.rowData[3]}</td>
        <td>{this.props.rowData[4]}</td>
        <td>{this.props.rowData[5]}</td>
        <td>{this.props.rowData[6]}</td>
        <td>{this.props.rowData[7]}</td>
        <td>{this.props.rowData[8]}</td>
        <td>{this.props.rowData[9]}</td>
        <td>{this.props.rowData[10]}</td>
        <td>{this.props.rowData[11]}</td>
        <td>{this.props.rowData[12]}</td>
        <td>{this.props.rowData[13]}</td>
        <td>{this.props.rowData[14]}</td>
        <td>{this.props.rowData[15]}</td>
      </tr>
    );
  }
}

export default TableRowComponent;
