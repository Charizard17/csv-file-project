import React, { Component } from "react";
import FileReaderComponent from "./FileReaderComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myRef: React.createRef(),
    };
  }

  render() {
    return (
      <div>
        <h1>Hello from App component</h1>
        <FileReaderComponent />
      </div>
    );
  }
}
