var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { 
  res.send('respond with a resource');
  next(); // This means that we are going to make another request
});

router.get('/cool', function(req, res, next) { // The another request with its url parameter and response. Needed to use /users/cool (as /users is the root URL for usersRouter in app.js)
  res.send("You're so cool!");
  next(); // Another request is going on 
});

router.get('/cool/anothercool', function(req, res, next) { // The third request. Needed to use /users/cool/anothercool
  res.send("Another you're so cool!");
  res.end(); // Indicates the end of the requests flow
});

module.exports = router; // Exporting all requests at once

