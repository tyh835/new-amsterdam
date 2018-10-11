import React, { Component } from 'react';

class BlankPreview extends Component {
  state = {
    visible: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true });
    }, 1000)
  }

  render() {
    if (!this.state.visible) return <div />

    return (
      <div class="alert alert-warning" role="alert">
        <h4 class="alert-heading">Sorry, there is no preview.</h4>
        <p>Please toggle the preview with the icon to the right.</p> 
      </div>
    );
  }
}

export default BlankPreview;
