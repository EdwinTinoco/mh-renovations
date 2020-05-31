import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Icons from "../helpers/icons";

import Navbar from "./navBar/navBar";
import Home from "./pages/home";
import ContactUs from "./pages/contact";
import GetQuote from "./pages/get-quote";
import Footer from "./footer/footer";

export default class App extends Component {
  constructor() {
    super();

    Icons();
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/get-quote" component={GetQuote} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
