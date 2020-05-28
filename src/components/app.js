import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Icons from "../helpers/icons"

import Home from "./pages/home"

export default class App extends Component {
  constructor() {
    super();

    Icons();
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
