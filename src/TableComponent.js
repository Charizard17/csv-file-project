import React, { Component } from "react";
import TableRowHeadComponent from "./TableRowHeadComponent";
import TableRowComponent from "./TableRowComponent";

class TableComponent extends Component {
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <TableRowHeadComponent headData={this.props.headLine} />
          </thead>
          <tbody>
            <TableRowComponent rowData={this.props.splittedRows} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
