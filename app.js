$(document).ready(function(){




$("#executeRun").on("click",function() {


var searchTerm = $('#search-term').val();

var numRecords = $('#numRecordsSelect').val();

var startDate = $('#start-year').val();

var endDate = $('#end-year').val();

var articleContainer = $('#resultsArea');

startDate += "0101";
endDate += "0101";

console.log(startDate);
console.log(endDate);
console.log(searchTerm);

console.log("here");


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "7efd7705bed343d498f6b717ffda6638",
  'q': searchTerm,
  'begin_date': startDate,
  'end_date': endDate,
  'page': Math.ceil(numRecords/10),

});

$.ajax({
  url: url,
  method: 'GET',
})

.done(function(result) {
  console.log(result);

  var value = result.response;

  console.log(value);
 for (var i = 0; i < value.docs.length; i++) {
 	var container = $('<div>');
 	var index = i+1;
 	var headLine = $('<h1>');
 	var author = $('<h3>');
 	var section = $('<h4>');
 	var date = $('<h4>');
 	var link = $('<span>');
  console.log("in loop");

 	headLine.html(value.docs[i].headline.main);
  console.log(headLine);
 	author.html(value.docs[i].byline.original);
 	section.html("Section: " + value.docs[i].section_name);
 	date.html(value.docs[i].pub_date);
 	link.html(value.docs[i].web_url);

 	console.log(value.docs[i]);

 	container.append(index);
 	container.append(headLine);
 	container.append(author);
 	container.append(section);
 	container.append(date);
 	container.append(link);

 	articleContainer.prepend(container);

 }  

})

.fail(function(err) {
  throw err;
});


});				// close onclick fucntion



$('#clearResults').click(function() {
console.log("here clear");
	$('#resultsArea').empty();
	$('#search-term').empty();
	$('#start-year').empty();
	$('#end-year').empty();
	$('#numRecordsSelect').empty();


});



});			//document ready function close

