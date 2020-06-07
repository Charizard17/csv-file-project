import React, { Component } from "react";
import FileReaderComponent from "./FileReaderComponent";
import { Switch, Route } from "react-router-dom";
import AddNewProduct from "./Table/AddNewProduct";

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
        <Switch>
          <Route exact path="/">
            <FileReaderComponent />
          </Route>
          <Route exact path="/add">
            <AddNewProduct />
          </Route>
        </Switch>
      </div>
    );
  }
}
