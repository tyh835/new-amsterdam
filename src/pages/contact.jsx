import React, { Component } from 'react';
import styled from 'styled-components';

export default class Contact extends Component {
  render() {
    return (
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Email: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <div data-netlify-recaptcha></div>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>);
  }
}
