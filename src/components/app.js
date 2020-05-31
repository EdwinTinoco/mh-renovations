import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Icons from "../helpers/icons"

import Home from "./pages/home"
import NavigationBar from "./navigation_bar/navigation-bar"
import Footer from "./footer/footer"

export default class App extends Component {
  constructor() {
    super();

    Icons();
  }

  render() {
    return (
      <div className="app">
        <Router>
          <NavigationBar scrolling dark expand="md" fixed="top" />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
