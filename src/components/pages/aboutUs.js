import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SubscribeNewsletter from "../subscribe/subscribe-newsletter";
import profile1 from "../../../static/assets/images/aboutUs/profile1.png";



export default class About extends Component {
  render() {
    return (
      <div className="aboutUs-wrapper">
        <div className="aboutUs-header">
          <div className="header-text-wrapper">
            <h1>Who We Are</h1>
          </div>
        </div>
        <div className="aboutUs-body">
          <h1>Established 2020</h1>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eius
            possimus dolorem architecto libero repellendus nulla quas veniam
            illum sint.
          </h3>
          <div className="p1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              consequatur corporis, nihil a velit ratione?
          </p>
          </div>
          <div className="p2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              quidem quod consequuntur accusantium neque, illo provident officiis
              sunt non? Soluta?
          </p>
          </div>
          <div id="line"></div>

          <div className="about-profile">
            <div className="avatar-image">
              <img src={profile1} />
            </div>
            <div className="aboutDescription">
              <h2>Hector Barrera</h2>
              <h3>Titles goes here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                esse repellat necessitatibus sunt! Ea optio odio enim expedita
                explicabo aliquam quae officia fugit voluptatum. Nemo pariatur
                et dignissimos, ea modi rerum dolore, blanditiis nihil provident
                dolor beatae obcaecati eos, animi quas explicabo! Quasi incidunt
                laborum aliquid dignissimos, earum quos ab.
              </p>
            </div>
          </div>

          <div id="line"></div>

          {/* <h1 className="line" /> */}
          <div className="about-profile">
            <div className="avatar-image">
              <img src={profile1} />
            </div>
            <div className="aboutDescription">
              <h2>Maximiliano Sorto</h2>
              <h3>Titles goes here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                esse repellat necessitatibus sunt! Ea optio odio enim expedita
                explicabo aliquam quae officia fugit voluptatum. Nemo pariatur
                et dignissimos, ea modi rerum dolore, blanditiis nihil provident
                dolor beatae obcaecati eos, animi quas explicabo! Quasi incidunt
                laborum aliquid dignissimos, earum quos ab.
              </p>
            </div>
          </div>
        </div>

        <div className="get-quote">
          <Link to="/get-quote">
            <div className="button">
              <div className="icon">
                <FontAwesomeIcon icon="phone" />
              </div>
                  Let's talk about your project
               </div>
          </Link>
        </div>

        <SubscribeNewsletter />
      </div>
    );
  }
}
