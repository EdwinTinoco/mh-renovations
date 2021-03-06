import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Icons from "../helpers/icons";

import Navbar from "./navBar/navBar";
import Home from "./pages/home";
import About from "./pages/aboutUs";
import ServiceKitchens from "./pages/service-kitchens";
import ContactUs from "./pages/contact";
import GetQuote from "./pages/get-quote";
import Footer from "./footer/footer";
import SideDrawer from "./sideDrawer/sideDrawer";
import Backdrop from "./backdrop/backdrop";

import PortfolioHotels from "./pages/portfolio-hotels";
import Ammenities from "./portfolio/ammenities";
import BackOffice from "./portfolio/back-office";
import CommonAreas from "./portfolio/common-areas";
import Lobby from "./portfolio/lobby";
import GuestRoom from "./portfolio/guest-room";

import PortfolioResidences from "./pages/portfolio-residences";
import Kitchens from "./portfolio/kitchens";
import Bathrooms from "./portfolio/bathrooms";
import Bedrooms from "./portfolio/bedrooms";
import LaundryRooms from "./portfolio/laundry-rooms";
import LivingAreas from "./portfolio/living-areas";


export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      sideDrawerOpen: false,
    };

    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
  }

  drawerToggleClickHandler() {
    this.setState((prevState) => ({
      sideDrawerOpen: !prevState.sideDrawerOpen,
    }));
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop />;
    }

    return (
      <div className="app">
        <Router>
          <Navbar
            drawerToggleClickHandler={this.drawerToggleClickHandler}
            isOpenState={this.state.sideDrawerOpen}
          />

          <SideDrawer isOpenState={this.state.sideDrawerOpen} />
          {backdrop}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/service/kitchens" component={ServiceKitchens} />

            <Route path="/portfolio/hotels" component={PortfolioHotels} />
            <Route path="/portfolio/hotel/lobby" component={Lobby} />
            <Route path="/portfolio/hotel/guest-room" component={GuestRoom} />
            <Route path="/portfolio/hotel/ammenities" component={Ammenities} />
            <Route path="/portfolio/hotel/back-office" component={BackOffice} />
            <Route path="/portfolio/hotel/common-areas" component={CommonAreas} />


            <Route path="/portfolio/residences" component={PortfolioResidences} />
            <Route path="/portfolio/residence/kitchens" component={Kitchens} />
            <Route path="/portfolio/residence/bathrooms" component={Bathrooms} />
            <Route path="/portfolio/residence/bedrooms" component={Bedrooms} />
            <Route path="/portfolio/residence/laundry-rooms" component={LaundryRooms} />
            <Route path="/portfolio/residence/living-areas" component={LivingAreas} />



            <Route path="/contact" component={ContactUs} />
            <Route path="/get-quote" component={GetQuote} />
          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}
