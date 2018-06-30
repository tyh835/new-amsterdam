import React, {Component} from "react";
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";

import {encode} from '../utils/utils.js';

const RECAPTCHA_KEY = "6Le6lGEUAAAAAPitKLCGmirC8TIDmylpuux0u9F3";

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "", email: "", message: "", "g-recaptcha-response": ""};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": 'contact',
        ...this.state
      })
    })
      .then(() => navigateTo('/'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <h1>Contact Us</h1>
        <form
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={this.handleSubmit}
        >
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
          <Recaptcha
            ref="recaptcha"
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}