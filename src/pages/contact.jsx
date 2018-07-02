import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
    this.validate = false;
  }

  validateInput = () => {
    // add actual validation
    this.validate = true;
  }

  handleSubmit = e => {
    this.validateInput();
    // allow default behaviour if fields have been validated
    if (!this.validate) {
      e.preventDefault();
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <label>Message: </label>
        <textarea name="message" value={message} onChange={this.handleChange} />
        <div data-netlify-recaptcha />
        <button type="submit">Send</button>
      </form>
    );
  }
}
