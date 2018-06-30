import React, {Component} from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  render() {
    return (
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" /> 
        <p>
          <label>Name: <input type="text" name="name" value={name} onChange={this.handleChange} /></label>
        </p> 
        <p>
          <label>Email: <input type="text" name="name" value={email} onChange={this.handleChange} /></label>
        </p>
        <p>
          <label>Message: <textarea name="message" value={message} onChange={this.handleChange}></textarea></label>
        </p>
        <div data-netlify-recaptcha></div>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>);
  }
}
