import React, { Component } from "react";
import { Link } from "react-router-dom"
import Logo from "../../../static/assets/images/logo/mh_logo2.png"

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="leftColumn">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>

        <div className="rightColumn">
          <div className="links-wrapper">
            <div className="dropdown">
              <button className="dropbtn">About Us</button>
              <div className="dropdown-content">
                <Link to="/about">Who we are</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Services</button>
              <div className="dropdown-content">
                <Link to="/service/kitchens">Kitchens</Link>
                <Link to="/">Link 2</Link>
                <Link to="/">Link 3</Link>
                <Link to="/">Link 4</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Projects</button>
              <div className="dropdown-content">
                <Link to="/portfolio/hotels">Hotels</Link>
                <Link to="/">Residencies</Link>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/contact">
                <button className="dropbtn">Contact Us</button>
              </Link>
            </div>
            <div className="dropdown">
              <Link to="/get-quote">
                <button className="dropbtn">Get a Quote</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
