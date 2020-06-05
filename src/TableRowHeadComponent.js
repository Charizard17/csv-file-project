import React, { Component } from "react";

class TableRowHeadComponent extends Component {
  render() {
    return (
      <tr>
        <th scope="col">{this.props.headData[0]}</th>
        <th scope="col">{this.props.headData[1]}</th>
        <th scope="col">{this.props.headData[2]}</th>
        <th scope="col">{this.props.headData[3]}</th>
        <th scope="col">{this.props.headData[4]}</th>
        <th scope="col">{this.props.headData[5]}</th>
        <th scope="col">{this.props.headData[6]}</th>
        <th scope="col">{this.props.headData[7]}</th>
        <th scope="col">{this.props.headData[8]}</th>
        <th scope="col">{this.props.headData[9]}</th>
        <th scope="col">{this.props.headData[10]}</th>
        <th scope="col">{this.props.headData[11]}</th>
        <th scope="col">{this.props.headData[12]}</th>
        <th scope="col">{this.props.headData[13]}</th>
        <th scope="col">{this.props.headData[14]}</th>
        <th scope="col">{this.props.headData[15]}</th>
      </tr>
    );
  }
}

export default TableRowHeadComponent;
