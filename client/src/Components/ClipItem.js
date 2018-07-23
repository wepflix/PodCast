import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClipItem extends Component {

  render() {
    var className = "clip-item";
    if (this.props.active === "true")
    {
        className += " active";
    }
    else if (this.props.active === "hover")
    {
        className += " clip-item-hover";
    }
    return (
      <a className={className} href={this.props.clipItemLink}>
        <h2>{this.props.clipItem.title}</h2>
        <p>{this.props.clipItem.pubDate}</p>
      </a>
    );
  }
}

ClipItem.propTypes = {
  clipItem: PropTypes.object,
  active: PropTypes.string,
  clipItemLink: PropTypes.string
}

export default ClipItem;
