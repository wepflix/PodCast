import React, { Component } from 'react';
import ClipItem from './ClipItem';
import ClipInfo from './ClipInfo';
import $ from 'jquery';

class ClipItems extends Component {

    constructor(){
      super();
      this.state = {
        itemIndexHovered: 0 //Index of the item hovered by the arrow keys
      }
    }

  componentWillMount() {
        document.addEventListener("keydown", this.onKeyPressed.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyPressed.bind(this));
    }

    onKeyPressed(e) {
        e = e || window.event;
        if (e.keyCode === 38) {
            // up arrow
            if (this.state.itemIndexHovered !== 0)
            {
                // set hovered index to previous item
                this.setState({
                    itemIndexHovered: this.state.itemIndexHovered - 1
                });
                // Update view
                this.forceUpdate();
                this.scrollToIndex();
            }
        }
        else if (e.keyCode === 40) {
            // down arrow
            if (this.props.clips.length > this.state.itemIndexHovered+1)
            {
                // set hovered index to next item
                this.setState({
                    itemIndexHovered: this.state.itemIndexHovered + 1
                });
                // Update view
                this.forceUpdate();
                this.scrollToIndex();
            }
        }
        else if(e.keyCode === 13) {
            //Enter keycode
            this.NavigateToSelectedItem();
        }
    }

  NavigateToSelectedItem()
  {
    var location = window.location.href.toString();
    if (location.includes("?"))
    {
      location = location.split("?")[0];
    }
    window.location = location + "?id=" + this.state.itemIndexHovered;
  }

  scrollToIndex()
  {
    var clipList = document.getElementsByClassName("clip-list")[0];
    if (this.state.itemIndexHovered > 3)
    {
        // Scroll to bottom
        clipList.scrollTop = $('.clip-list').height() + ((this.state.itemIndexHovered-4)*90);
    }
    else
    {
        // Scroll to top
        clipList.scrollTop = "0";
    }
  }

  render() {
    let clipItems;
    var clipInfo = {link: "", description: ""};
    var clipItemLink = "";
    if(this.props.clips){
      var url = new URL(window.location.href.toString());
      var ID = url.searchParams.get("id"); // get video ID
      var location = window.location.href.toString();
      if (location.includes("?"))
      {
        location = location.split("?")[0];
      }
      if (ID == null)
      {
        ID = 0;
      }
      clipItems = this.props.clips.map((clip, index) => {
        clipItemLink = location + "?id=" + index.toString();
        if (index.toString() === ID.toString()) {
            // Selected clip
            clipInfo = {link: clip.link, description: clip.description};
            return (
              <ClipItem key={clip.title} clipItem={clip} active="true" clipItemLink={clipItemLink}/>
            );
        }
        else if (index.toString() === this.state.itemIndexHovered.toString()) {
            // Hovered clip
            return (
              <ClipItem key={clip.title} clipItem={clip} active="hover" clipItemLink={clipItemLink} />
            );
        }
        else {
            return (
              <ClipItem key={clip.title} clipItem={clip} active="false" clipItemLink={clipItemLink} />
            );
        }
      });
    }

    return (
      <section className="main">
        <aside className="clip-list">
        {clipItems}
        </aside>
        <ClipInfo clipInfo={clipInfo} />
      </section>
    );
  }
}
ClipItems.propTypes = {
  clips: React.PropTypes.array
}

export default ClipItems;
