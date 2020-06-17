import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SubscribeNewsletter from "../subscribe/subscribe-newsletter";

export default class ContactUs extends Component {
   constructor() {
      super()

      this.state = {
         name: "",
         email: "",
         phone: "",
         message: ""
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e) {
      e.preventDefault();

   }

   render() {
      return (
         <div className="contact-main-wrapper" >
            <div className="main-title">
               <div className="icon">
                  <FontAwesomeIcon icon="phone" />
               </div>
               <div className="title">
                  <h1>Contact us</h1>
               </div>
            </div>
            <div className="form-info-wrapper">
               <div className="form-wrapper">
                  <div className="title">
                     <h1>We'd love to hear from You</h1>
                     <p>If you have any questions or would like to book
                        an appointment fill out the form below or give us a call.</p>
                  </div>

                  <form className="form" onSubmit={this.handleSubmit}>
                     <div className="form-group">
                        <input
                           type="text"
                           id="name"
                           placeholder="Name"
                           name="name"
                           value={this.state.name}
                           onChange={this.handleChange}
                        />
                        <label htmlFor="name">Name</label>
                     </div>

                     <div className="form-group">
                        <input
                           type="email"
                           id="email"
                           placeholder="Email"
                           name="email"
                           value={this.state.email}
                           onChange={this.handleChange}
                        />
                        <label htmlFor="email">Email</label>
                     </div>

                     <div className="form-group">
                        <input
                           type="text"
                           id="phone"
                           placeholder="Phone"
                           name="phone"
                           value={this.state.phone}
                           onChange={this.handleChange}
                        />
                        <label htmlFor="phone">Phone</label>
                     </div>

                     <div className="form-group">
                        <textarea
                           id="message"
                           placeholder="Message"
                           name="message"
                           value={this.state.message}
                           onChange={this.handleChange}
                        />
                        <label htmlFor="message">Message</label>
                     </div>

                     <div className="center-btn-wrapper">
                        <button type="submit" className="btn">Send</button>
                     </div>
                  </form>

               </div>

               <div className="info-wrapper">
                  <div className="icon-title">
                     <div className="icon">
                        <FontAwesomeIcon icon="map-marker-alt" />
                     </div>

                     <div className="title">
                        <h2>Provo</h2>
                     </div>
                  </div>

                  <div className="address">
                     9999 Some Street <br />
                     Provo, UT, 80000
                  </div>

                  <div className="phone-number">
                     (555) 555-5555 <br />
                     (555) 555-5555
                  </div>

                  <div className="email">
                     <p>ejemplo@gmail.com</p>
                  </div>

                  <hr />

                  <div className="get-quote">
                     <p>Looking To Get A Quote On Your Next Project?</p>
                     <Link to="/get-quote">
                        <div className="button">
                           <div className="icon">
                              <FontAwesomeIcon icon="calculator" />
                           </div>
                           Get a quote
                        </div>
                     </Link>
                  </div>
               </div>
            </div>

            <SubscribeNewsletter />
         </div>
      )
   }
}