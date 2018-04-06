require("dotenv").config();
var inquirer = require("inquirer");
var Twitter = require('twitter');
var keys = require("./key.js");

// var spotify = new Spotify(keys.spotify);



var client = new Twitter(keys.twitter);

var params = {screen_name: 'Bwash105'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text);
  }
});