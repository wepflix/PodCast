# Podcast feed web app

This project is a web app to play podcast from the cnn rss podcast feed.

In order to control the app, you need to use the up and down arrows to select a podcast and the enter key to play/pause the podcast.

## Requirements

* node 0.10.26
* npm 1.4.3

It's very possible that node version 0.10.x will work (x >=26)

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Apache

Setup Apache, then copy the files on your web directory (~/Library/WebServer/Documents on Mac OS X for example)
Make sure Apache is running

```
sudo apachectl start
```

Access the app accordingly to your Apache setup and the path you setup for this web app.


## V1.0 Features: ##
* 	The application reads the RSS file for one of the video podcasts available on http://www.cnn.com/services/podcasting/
* 	The application display a list of available episodes for the feed.
* 	The list shows four episodes, and allow the user to scroll up and down in the list using arrow keys in case more than four episodes are available.
* 	When the user selects one episode, that episode shall start playing in the video playback area and the episode's description must appear beneath the video playback area.

## Information Display:##
* 	The podcast name
* 	The podcast description
* 	A list of episodes with their title and pub date
* 	A video window showing episodes
* 	A description of the current video

## Technical Requirements ##
* 	The app work in Firefox 5.+ and/or in Chrome.
* 	The app was developed using (X)HTML, JavaScript and CSS.
* 	The app is usable by using only the arrow keys (UP/DOWN/LEFT/RIGHT) for navigation, and the return key (ENTER) for selection. No dependencies on mouse navigation are required.
* 	The app fits entirely inside an area of 1280x720 pixels. It can fit other resolutions, but no other scenario was tested.
* 	The app is runnable using a normal Apache server.

## Additional Plugins: ##
* 	Proxy: Rss Parser is used as a ‘proxy’ is used in order to read XML feeds from CNN.com.
* 	Javascript: JQuery framework is used in order to simplify Ajax requests and DOM Manipulation.


## App Info

### Author

Essam Nabil

### Version

1.0.0
