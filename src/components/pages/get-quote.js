import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class GetQuote extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      telephone: "",
      address: "",
      city: "",
      budget: "",
      projectType: "",
      hearAboutUS: "",
      message: "",
      replyTo: "edwin2891@hotmail.com",
      errorMessage: "",
      showErrorMessage: "none",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (
      this.state.name == "" ||
      this.state.email == "" ||
      this.state.message == ""
    ) {
      this.setState({
        errorMessage: "Name, Email and Message are required",
        showErrorMessage: "block",
      });
    } else {
      let service_id = "gmail";
      let template_id = "contact_template";
      let user_id = "user_4F9p2P6OXkAqnr87vVSVS";

      emailjs.send(service_id, template_id, this.state, user_id).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          this.setState({
            name: "",
            email: "",
            phone: "",
            message: "",
            errorMessage: "Message has been sent!",
            showErrorMessage: "block",
          });
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    }
  }
  render() {
    return (
      <div className="quoteWrapper">
        <div className="quoteHeader">
          <div className="title">
            <h1>Quote</h1>
          </div>
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
                  value={this.state.name}
                  onChange={this.handleChange}
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
                  value={this.state.email}
                  onChange={this.handleChange}
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
                  value={this.state.telephone}
                  onChange={this.handleChange}
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
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                <label htmlFor="address">Address</label>
              </div>
              <div className="formGroup">
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
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
                  value={this.state.budget}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="budget">Budget</label>
              </div>
              <div className="formGroup">
                <select
                  name="projectType"
                  placeholder="Select One"
                  defaultValue=""
                  value={this.state.projectType}
                  onChange={this.handleChange}
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
                  value={this.state.hearAboutUs}
                  onChange={this.handleChange}
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
                <textarea
                  type="text"
                  placeholder="Message"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
                <label htmlFor="message">Message</label>
              </div>

              <div className="centerBtn">
                <button type="submit" className="btn">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="quoteRight">
            <div className="title">
              <h2>Contact Us</h2>
              <p>We would love to hear about your next project.</p>
              <p>
                <b>Give us a call.</b>
              </p>
            </div>

            <div className="phone-number">
              (555) 555-5555 <br />
              (555) 555-5555
            </div>

            <div className="email">
              <p>ejemplo@gmail.com</p>
            </div>

            <hr />
          </div>
        </div>
      </div>
    );
  }
}
