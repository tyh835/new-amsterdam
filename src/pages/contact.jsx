import React, {Component} from "react";
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";

import {encode} from '../utils/utils.js';

const RECAPTCHA_KEY = "6Le6lGEUAAAAAPitKLCGmirC8TIDmylpuux0u9F3";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = e => {
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>reCAPTCHA 2</h1>
        <form
          name="contact"
          method="post"
          action="/contact/"
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={this.handleSubmit}
        >
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <Recaptcha
            ref="recaptcha"
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />
          <p>
            <button className="g-recaptcha" type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}