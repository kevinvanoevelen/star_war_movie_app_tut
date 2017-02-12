

// express variables

var express = require('express');


// application as an instance of the express class (module)

var app = express();


// view engine

app.set('view engine', 'ejs');


// general variables

var port = process.env.PORT || 1603;
// var host = "127.0.0.1";


// path

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// routes

var routes = require('./routes');


// home

app.get('/', routes.home);


//movie single

app.get('/star_wars_episode/:episode_number?', routes.movie_single);


// not found
// movie_single takes care of all the possible pages not to be found with the else part of the if alse statement so there is no need to refer to a export.not_found method
app.get('*', routes.movie_single);





// server

app.listen(port, () => {
	console.log("the app is running on: " + port);
});


