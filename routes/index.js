
// data json file
var moviesJSON = require('../movies.json');

// not found message
var not_found_message = "<head><meta charset='utf-8'/><meta name='viewport' content='width=device-width, initial-scale=1.0'/><meta name='author' author='kevin van oevelen'/><title>Star War Movies</title><link rel='stylesheet' href='../css/main_style.css' type='text/css'/></head><body style='outline: 0; width: 100%; height: auto; margin: 0px; padding: 0px; background-image: url(../img/death_star_image.jpg); background-size: cover; background-repeat: no-repeat; background-position: center; background-attachment: fixed; color: rgba(252,252,230,0.6); font-family: orbitron, verdana, sans-serif; color: rgba(252,252,230,0.6);'><h1 style='margin: 25px auto 0px auto; padding: 0px; background: rgba(14,14,14,0.8); width: 96%; height: 620px; line-height: 340px; font-size: 208px;  text-align: center; border-radius: 6px'>404 Page Not Found</h1><li style='position: absolute; z-index: 100; top: 50px; right: 130px; margin: 0px; padding: 0px; background: rgba(28,26,24,0.99); box-shadow: 0px 0px 0px 1px rgba(252,252,230,0.6) inset; width: 10%; height: 40px; line-height: 44px; font-size: 22px; text-align: center; border-radius: 6px'><a href='http://localhost:1603' style='display: inline-block; text-decoration: none; color: inherit;'>Home</a></li>";

// home

exports.home = function(req,res) {

	var movies = moviesJSON.movies;
	// var episode_number = movies.episode_number;

	res.render("home", {
		movies: movies,
		title: "Star Wars Movies"
	});

};


//movie single

exports.movie_single = function(req,res) {

	var movies = moviesJSON.movies;
	
	var episode_number = req.params.episode_number;

	var movie = movies[episode_number-1];

	if (episode_number >= 1 && episode_number <= 6) {

		res.render('movie_single', {
			movies: movies,
			movie: movie,
			title: movie.title,
			main_characters: movie.main_characters
		});
		
		console.log(movies[episode_number-1].title);
	
	} else {
		// takes care of all the possible pages not to be found
		res.render("notFound", {
			movies: movies,
			movie: movie,
			title: "404 Page Not Found"
		}) || res.send(not_found_message);
	
	};

};



















