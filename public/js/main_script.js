

var footer = document.getElementById('main_foot');

var drop_menu = document.getElementById('dropdown-menu');
var btn_movies = document.getElementById('btn-movies');




btn_movies.onclick = function() {
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	if (w <= 767) {
		drop_menu.style.marginLeft = "-" + (w+15) + "px";
		drop_menu.style.height = (h) + "px";
	} else {
		drop_menu.style.height = "auto";
	}
};


























