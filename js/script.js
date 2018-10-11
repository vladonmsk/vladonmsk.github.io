document.body.onload = function () {
	setTimeout(function() {
		var preloader = document.getElementById('preload');
		var map = document.getElementById('maps');
		preloader.className = 'done';
		map.className = 'maps';
	}, 1000);
}