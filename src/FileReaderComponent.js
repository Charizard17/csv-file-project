import React, { Component } from "react";

class FileReaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileReader: "",
    };
  }
  handleFileRead = (e) => {
    const content = this.fileReader.result;
    let headLine = content.indexOf("\n");
    let rest = content.slice(0, headLine).split(";");
    console.log(rest);

    let otherLines = content.slice(headLine, content.length);
    // Split and get the rows in an array
    let rows = otherLines.split(".jpg");

    let splittedRows = [];
    for (let i = 0; i < rows.length; i++) {
      splittedRows.push(rows[i].split(";"));
    }
    console.log(splittedRows);
  };

  handleFileChosen = (file) => {
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
  };

  render() {
    return (
      <div>
        <h2>This is File Reader component</h2>
        <input
          type="file"
          id="file"
          className="input-file"
          accept=".csv"
          onChange={(e) => this.handleFileChosen(e.target.files[0])}
        />
      </div>
    );
  }
}

export default FileReaderComponent;
