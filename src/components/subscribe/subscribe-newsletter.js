import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SubscribeNewsletter extends Component {
   constructor() {
      super();

      this.state = {
         name: "",
         email: ""
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

      let service_id = "gmail";
      let template_id = "newsLetterSubscribe_template";
      let user_id = "user_4F9p2P6OXkAqnr87vVSVS";

      emailjs.send(service_id, template_id, this.state, user_id)
         .then(response => {
            console.log("SUCCESS!", response.status, response.text);
            this.setState({
               name: "",
               email: ""
            });
         },
            (err) => {
               console.log("FAILED...", err);
            },
         );
   }

   render() {
      return (
         <div className="sign-up-newsletter-wrapper">
            <div className="title-icon">
               <div className="icon">
                  <FontAwesomeIcon icon="envelope" />
               </div>
               <h2>Sign Up to our NewsLetter</h2>
            </div>
            <form onSubmit={this.handleSubmit} className="input-button-wrapper">
               <div className="name">
                  <input
                     type="text"
                     placeholder="Name"
                     name="name"
                     value={this.state.name}
                     onChange={this.handleChange}
                  />
               </div>
               <div className="email">
                  <input
                     type="email"
                     placeholder="Email"
                     name="email"
                     value={this.state.name}
                     onChange={this.handleChange}
                  />
               </div>
               <div className="button">
                  <button type="button">Subscribe</button>
               </div>
            </form>
         </div>
      )
   }
}