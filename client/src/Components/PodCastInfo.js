import React, { Component } from 'react';

class PodCastInfo extends Component {

  render() {
    return (
      <header className="header">
        <h1>{this.props.podcastInfo.title}</h1>
        <p>{this.props.podcastInfo.description}</p>
      </header>
    );
  }
}

PodCastInfo.propTypes = {
  podcastInfo: React.PropTypes.object
}

export default PodCastInfo;
