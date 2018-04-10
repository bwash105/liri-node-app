require("dotenv").config();
var inquirer = require("inquirer");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var keys = require("./key.js");
var fs = require("fs");

// var spotify = new Spotify(keys.spotify);
var action = process.argv[2];
var value = process.argv[3];


var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

// Switch Actions to target the Action
switch (action) {
    case "my-tweets":
      myTweets();
      break;
    
    case "spotify-this-song":
      mySpotify();
      break;
    
    case "movie-this":
      myMovie();
      break;
    
    case "do-what-it-says":
      myWay();
      break;
    }
// my-tweets
// node liri.js my-tweets
// -----------------------------
function myTweets() {
var params = {screen_name: 'Bwash105'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text);
  }
  for (var k = 0; k < 5; k++) {
    var tweetArr = [];
    for(var i = 0; i < tweets[i].length; i++) {
      tweet = tweets[i].text
      tweetArr.push(tweet);
    }
    console.log("-------------------------------");
      console.log("Tweets: " + tweetArr.join(", "));
      console.log("-------------------------------");
  }

});
}

// spotify-this-song
// node liri.js spotify-this-song '<song name here>'
// -----------------------------


 

function mySpotify() {
  spotify.search({ type: 'track', query: value }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data);
    
    for (var j = 0; j < 5; j++) {
      var artistsArr = [];
      for (var i = 0; i < data.tracks.items[j].artists.length; i++) {
          artist = data.tracks.items[j].artists[i].name
          artistsArr.push(artist);
      }
      console.log("-------------------------------");
      console.log("Artist(s): " + artistsArr.join(", "));
      //  The song's name
      console.log("Song Title: " + data.tracks.items[j].name);
      //  A preview link of the song from Spotify
      console.log("Preview Here " + data.tracks.items[j].preview_url);
      //  The album that the song is from
      console.log("Album: " + data.tracks.items[j].album.name)
      console.log("-------------------------------");
  }

    // Do something with 'data' 
});

}

// movie-this
// node liri.js movie-this '<movie name here>'
// -----------------------------

// do-what-it-says
// node liri.js do-what-it-says
// -----------------------------