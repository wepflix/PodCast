import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import ClipItems from './Components/ClipItems';
import PodCastInfo from './Components/PodCastInfo';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      clips: [], // To set all clip items retrieved from the server
      podcastInfo: {} // To set title and description for the podcast
    }
  }

  // getting json feed from the server
  getFeed(){
    $.ajax({
      url: '/getfeed',
      cache: false,
      success: function(data){
          this.getclips(JSON.parse(data));
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getclips(feedInfo){
    var clips = [];
    var feedItems = feedInfo['items'];
    // fetch items
    for (var i = 0; i < feedItems.length; i++)
    {
      clips.push({
        id: uuid.v4(),
        title: feedItems[i]["title"],
        pubDate: feedItems[i]["pubDate"],
        link: feedItems[i]["link"],
        description: feedItems[i]["contentSnippet"]
      });
    }
    this.setState({
      clips: clips, // set all clip items retrieved from the server
      podcastInfo: {title: feedInfo['title'], description: feedInfo['description']} //Set title and description for the podcast
    });
  }

  componentWillMount(){
    this.getFeed();
  }

  /*componentDidMount(){
    this.getTodos();
  }*/


  render() {
    // Set the main container
    return (
      <div className="container">
        <PodCastInfo podcastInfo={this.state.podcastInfo} />
        <ClipItems clips={this.state.clips}/>
      </div>
    );
  }
}

export default App;
