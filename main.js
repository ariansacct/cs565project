var interval = null;
var seconds = null;
window.onload = function() {
	interval = setInterval(function() {
		seconds++;
	}, 1000);
};

window.onbeforeunload = function() {
	alert('hit');
	window.localStorage('UpliftrSeconds', seconds);
	clearInterval()(interval);
};

$(window).on('beforeunload', function() {});

function myFunction() {
	var paths = [
		'../pics/1.jpg',
		'../pics/2.jpg',
		'../pics/3.jpg',
		'../pics/4.jpg',
		'../pics/5.jpg',
		'../pics/6.jpg',
		'../pics/7.jpg',
		'../pics/8.jpg',
		'../pics/9.jpg',
	];
	for (var p of paths) {
		$('.mainList').append(`<li><img src="${p}" />`);
		console.log('hit');
	}
	// var chosen = paths[Math.floor(Math.random() * paths.length)];
	// $("#myImage").attr("src", chosen);
}

myFunction();
