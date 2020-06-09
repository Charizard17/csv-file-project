import React, { Component } from "react";
import TableComponent from "./Table/TableComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileReader: "",
      headLine: "",
      splittedRows: [],
    };
  }
  handleFileRead = (e) => {
    const content = this.fileReader.result;
    let sliceIndex = content.indexOf("\n");
    let headLine = content.slice(0, sliceIndex).split(";");
    this.setState({ headLine });
    console.log(headLine);

    let otherLines = content.slice(sliceIndex, content.length);
    // Split and get the rows in an array
    let rows = otherLines.split(".jpg");
    let splittedRows = [];
    for (let i = 0; i < 10; i++) {
      splittedRows.push(rows[i].split(";"));
    }
    this.setState({ splittedRows });

    console.log(splittedRows);
  };

  handleFileChosen = (file) => {
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
  };

  editOnClick = (newElement) => {
    console.log(newElement);
    console.log(`${this.state.clickedElement}`);
  };

  render() {
    return (
      <div>
        <input
          type="file"
          id="file"
          className="input-file"
          accept=".csv"
          onChange={(e) => this.handleFileChosen(e.target.files[0])}
        />
        <div>
          <h2 className="text-center">Table</h2>
          <TableComponent
            exact
            path="/"
            headLine={this.state.headLine}
            splittedRows={this.state.splittedRows}
            editOnClick={this.editOnClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
