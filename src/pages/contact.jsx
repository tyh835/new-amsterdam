import React, {Component} from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {name, email, message} = this.state;
    return (
      <form name="contact" method="POST" data-netlify="true" onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" /> 
        <label>Name: </label><input type="text" name="name" value={name} onChange={this.handleChange} />
        <label>Email: </label><input type="text" name="name" value={email} onChange={this.handleChange} />
        <label>Message: </label><textarea name="message" value={message} onChange={this.handleChange}></textarea>
        <div data-netlify-recaptcha></div>
        <button type='submit'>Send</button>
      </form>);
  }
}
