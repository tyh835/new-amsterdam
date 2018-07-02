import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`

`;

const Input = styled.input`

`;

const Textarea = styled.textarea`

`;

const Button = styled.button`

`;

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
    this.validated = false;
  }

  validateInput = () => {
    // add actual validation
    this.validated = true;
  }

  handleSubmit = e => {
    this.validateInput();
    if (!this.validated) {
      e.preventDefault();
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>Name: </label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Email: </label>
        <Input
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <label>Message: </label>
        <Textarea name="message" value={message} onChange={this.handleChange} />
        <div data-netlify-recaptcha />
        <Button type="submit">Send</Button>
      </Form>
    );
  }
}
