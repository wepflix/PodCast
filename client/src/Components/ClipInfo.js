import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClipInfo extends Component {

  render() {
    return (
    <section className="video-section">
       <div className="clip-div">
          <video className="clip" controls src={this.props.clipInfo.link} >
          </video>
       </div>
       <div className="clip-description">
          <p id="clip-desc">{this.props.clipInfo.description}</p>
       </div>
    </section>
    );
  }
}

ClipInfo.propTypes = {
  clipInfo: PropTypes.object
}

export default ClipInfo;
