import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
export default class SideDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let drawerClasses = ["drawer-links-wrapper"];
    if (this.props.isOpenState) {
      drawerClasses = ["drawer-links-wrapper open"];
    }

    return (
      <div className={drawerClasses}>
        <div className="dropdown">
          <button className="dropbtn" onClick={this.menuToggleClick}>
            About Us
          </button>
          <div className="dropdown-content">
            <NavLink to="/about" activeClassName="activeNav">
              > Who we are
            </NavLink>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Services</button>
          <div className="dropdown-content">
            <NavLink to="/service/kitchens" activeClassName="activeNav">
              > Kitchens
            </NavLink>
            <NavLink to="/" activeClassName="activeNav">
              > NavLink 2
            </NavLink>
            <NavLink to="/" activeClassName="activeNav">
              > NavLink 3
            </NavLink>
            <NavLink to="/" activeClassName="activeNav">
              > NavLink 4
            </NavLink>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Projects</button>
          <div className="dropdown-content">
            <NavLink to="/portfolio/hotels" activeClassName="activeNav">
              > Hotels
            </NavLink>
            <NavLink to="/getquote" activeClassName="activeNav">
              >Residencies
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
    );
  }
}
