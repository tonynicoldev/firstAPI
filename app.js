const express = require('express'); 
const app = express(); 
const APP_PORT = 3000;

app.get('/', defaultFn);
app.get('/books', booksFn);
app.get('/time', timeFn);

app.listen(APP_PORT);



// ------------ functions ---------------

function booksFn(req, res) {
    // more stuff 
    res.send('Book ordered. How easy was that?');
}

function defaultFn(req, res) {
  // ... more stuff
  res.send(`I'm in the root path`);
}

function timeFn(req, res) {
  let today = new Date()
  let time = {};

  time.hours = today.getHours();
  time.minutes = today.getMinutes();
  time.seconds = today.getSeconds();

  res.json(time); // Convert javascript object into json to return in response
}
