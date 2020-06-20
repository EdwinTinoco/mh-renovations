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
            <div>
              <h1>Lets get Started</h1>
            </div>
            <form className="quoteForm">
              <div className="formGroup">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  required
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="formGroup">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="Email"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="formGroup">
                <input
                  type="text"
                  id="telephone"
                  placeholder="Telephone"
                  name="telephone"
                  required
                />
                <label htmlFor="telephone">Telephone</label>
              </div>
              <div className="formGroup">
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  name="address"
                />
                <label htmlFor="address">Address</label>
              </div>
              <div className="formGroup">
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  name="city"
                  required
                />
                <label htmlFor="city">City</label>
              </div>
              <div className="formGroup">
                <input
                  type="text"
                  id="budget"
                  placeholder="What is your budget?"
                  name="budget"
                  required
                />
                <label htmlFor="budget">Budget</label>
              </div>
              <div className="formGroup">
                <select
                  name="projectType"
                  placeholder="Select One"
                  defaultValue=""
                  required
                >
                  <option value="" disabled hidden>
                    Project Type
                  </option>
                  <option value="kitchen">Kitchen</option>
                  <option value="bathroom">Bathroom</option>
                  <option value="basement">Basement</option>
                  <option value="wholeHouse">Whole House</option>
                  <option value="design">Design and Planning</option>
                  <option value="renovations">Renovations</option>
                  <option value="repairs">Repairs</option>
                </select>
                <label htmlFor="projectType">Project Type</label>
              </div>

              <div className="formGroup">
                <select
                  placeholder=""
                  defaultValue=""
                  name="hearAboutUs"
                  required
                >
                  <option value="" disabled hidden>
                    How did you hear about us?
                  </option>
                  <option value="google">Google</option>
                  <option value="facebook">Facebook</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="hearAboutUs">How did you hear about us?</label>
              </div>
              <div className="formGroup">
                <textarea type="text" placeholder="Message" name="message" />
                <label htmlFor="message">Message</label>
              </div>

              <div className="formGroup">
                <button type="submit">Send</button>
              </div>
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
