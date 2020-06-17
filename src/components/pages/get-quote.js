import React, { Component } from "react";

export default class GetQuote extends Component {
  render() {
    return (
      <div className="quoteWrapper">
        <div className="quoteHeader">
          <h1>Quote</h1>
        </div>
        <div className="quoteBody">
          <div className="quoteLeft">
            <form className="quoteForm">
              <span>Name</span>
              <input />
              <span>Email</span>
              <input />
              <span>Telephone</span>
              <input />
              <span>Address</span>
              <input />

              <span>City</span>
              <input />

              <span>Project Type</span>
              <select name="projectType" placeholder="Select One">
                <option value="kitchen">Kitchen</option>
                <option value="bathroom">Bathroom</option>
                <option value="basement">Basement</option>
                <option value="wholeHouse">Whole House</option>
                <option value="design">Design and Planning</option>
                <option value="renovations">Renovations</option>
                <option value="repairs">Repairs</option>
              </select>

              <span>What is your budget?</span>
              <input />

              <span>How did you hear about us?</span>
              <select name="hearAboutUs">
                <option value="google">Google</option>
                <option value="facebook">Facebook</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </select>

              <span>Your Message/comments</span>
              <textarea name="text" />
              <input type="submit" />
            </form>
          </div>
          <div className="quoteRight">
            <h2>Contact Us</h2>
            <h4>We would love to hear about your next project</h4>
            <h6>Give us a call</h6>
            <p>
              Salt Lake City - <b>999-999-9999</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
