import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="leftColumn">
          <a href="/">
            <img src="https://via.placeholder.com/200x100" />
          </a>
        </div>

        <div className="rightColumn">
          <div className="menuLinks">
            <div className="dropdown">
              <button className="dropbtn">About Us</button>
              <div className="dropdown-content">
                <a href="/about">Who we are</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Services</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Projects</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="/contactUs">
                <button className="dropbtn">Contact Us</button>
              </a>
            </div>
            <div className="dropdown">
              <a href="/quote">
                <button className="dropbtn">Get a Quote</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
