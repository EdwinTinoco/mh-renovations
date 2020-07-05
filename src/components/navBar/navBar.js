import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../static/assets/images/logo/mh_transparent.png";

export default class Navbar extends Component {
  render() {
    let menu;
    if (this.props.isOpenState) {
      menu = (
        <FontAwesomeIcon
          icon="times"
          onClick={this.props.drawerToggleClickHandler}
        />
      );
    } else {
      menu = (
        <FontAwesomeIcon
          icon="bars"
          onClick={this.props.drawerToggleClickHandler}
        />
      );
    }
    return (
      <div className="nav">
        <div className="leftColumn">
          <NavLink to="/">
            <img src={Logo} />
          </NavLink>
        </div>

        <div className="rightColumn">
          <div className="menuIcon-wrapper">{menu}</div>
          <div className="links-wrapper">

            <div className="dropdown">
              <NavLink to="/" activeClassName="activeNav">
                <button className="dropbtn">Home</button>
              </NavLink>
            </div>

            <div className="dropdown">
              <NavLink to="/about" activeClassName="activeNav">
                <button className="dropbtn">About us</button>
              </NavLink>
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
                <NavLink to="/portfolio/residences" activeClassName="activeNav">
                  Residences
                </NavLink>
              </div>
            </div>

            <div className="dropdown">
              <NavLink to="/contact" activeClassName="activeNav">
                <button className="dropbtn">Contact us</button>
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
