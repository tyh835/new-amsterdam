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
      <div className="container mt-3">
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">Sorry, there is no preview.</h4>
          <p>Please toggle the preview with the icon to the right.</p> 
        </div>
      </div>
    );
  }
}

export default BlankPreview;
