import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../static/assets/images/logo/mh_logo2.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="leftColumn">
          <NavLink to="/">
            <img src={Logo} />
          </NavLink>
        </div>

        <div className="rightColumn">
          <div className="links-wrapper">
            <div className="dropdown">
              <button className="dropbtn">About Us</button>
              <div className="dropdown-content">
                <NavLink to="/about" activeClassName="activeNav">
                  Who we are
                </NavLink>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Services</button>
              <div className="dropdown-content">
                <NavLink to="/service/kitchens" activeClassName="activeNav">
                  Kitchens
                </NavLink>
                <NavLink to="/" activeClassName="activeNav">
                  NavLink 2
                </NavLink>
                <NavLink to="/" activeClassName="activeNav">
                  NavLink 3
                </NavLink>
                <NavLink to="/" activeClassName="activeNav">
                  NavLink 4
                </NavLink>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Projects</button>
              <div className="dropdown-content">
                <NavLink to="/portfolio/hotels" activeClassName="activeNav">
                  Hotels
                </NavLink>
                <NavLink to="/getquote" activeClassName="activeNav">
                  Residencies
                </NavLink>
              </div>
            </div>
            <div className="dropdown">
              <NavLink to="/contact" activeClassName="activeNav">
                <button className="dropbtn">Contact Us</button>
              </NavLink>
            </div>
            <div className="dropdown">
              <NavLink to="/get-quote" activeClassName="activeNav">
                <button className="dropbtn">Get a Quote</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
