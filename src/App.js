import React, { Component } from "react";
import FileReaderComponent from "./FileReaderComponent";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <FileReaderComponent />
          </Route>
        </Switch>
      </div>
    );
  }
}
