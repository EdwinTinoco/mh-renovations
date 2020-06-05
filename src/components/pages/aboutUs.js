import React, { Component } from "react";
import image1 from "../../../static/assets/images/aboutUs/aboutUs1.png";
export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div id="aboutUs-header">
          <img id="header-img" src={image1} alt="saw" />

          <h1>Who We Are</h1>
        </div>
        <div className="aboutUs-body">
          <h1>Established 2020</h1>
          <p>
            M&H Renovations was established to offer all the services needed for
            your next renovation all in one place.
          </p>
        </div>
      </div>
    );
  }
}
