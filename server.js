const express = require('express');
const fs = require('fs');

// init the app
const app = express();

// setup static files, server browser.js (webpacked file) from root
app.use(express.static(__dirname));

app.get('/data', (req, res) => {
  // Read and open the recipes json file
  fs.readFile(`${__dirname}/data/data.json`, 'utf8', (err, data) => {

    // Error handling - return an error
    if (err) {
      res.status(500).end();
      return console.error(err);
    }
    let recipes = JSON.parse(data);
    res.status(200).send({recipes});

  });
});

// start the app
app.listen(3000, () => {
  console.log('App listening on port: 3000');
});
