import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Icons from "../helpers/icons";

import Navbar from "./navBar/navBar";
import Home from "./pages/home";
import About from "./pages/aboutUs.js";
import ServiceKitchens from "./pages/service-kitchens.js";
import PortfolioHotels from "./pages/portfolio-hotels.js";
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
            <Route exact path="/about" component={About} />
            <Route exact path="/service/kitchens" component={ServiceKitchens} />
            <Route exact path="/portfolio/hotels" component={PortfolioHotels} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/get-quote" component={GetQuote} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
