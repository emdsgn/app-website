// Automatically load the dinos.json file as soon as the page loads.
var testiData = $.ajax('testimonials.json', {
	// Tell jQuery  that we are loading a JSON file and to parse it properly.
	dataType: 'json'
});

// Because AJAX takes time to download things of the internet .done() will be triggered only after jQuery has finished downloading.
testiData.done(function (data) {
	var testi = Math.round(Math.random() * (data.length - 1) );
console.log(data.length, testi);
	$('.testi-name').html(data[testi].name);
	$('.testi-quote').html(data[testi].quote);
});
