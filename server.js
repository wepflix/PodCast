const express = require('express');

const app = express();


app.get('/getFeed', function(request, response) {
    let Parser = require('rss-parser');
    let parser = new Parser();

    (async () => {

      let feed = await parser.parseURL('http://rss.cnn.com/services/podcasting/studentnews/rss.xml');
      //console.log(feed.title);
      response.send(JSON.stringify(feed));

    })();
});
const port = 5000;
console.log(`Server running on port ${port}`);
app.listen(port, () => `Server running on port ${port}`);
