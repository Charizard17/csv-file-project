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
            {this.props.splittedRows.map((element, i) => {
              return <TableRowComponent key={i} rowData={this.props.splittedRows[i]} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
