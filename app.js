$(document).ready(function(){



var searchTerm = $('#search-term');

var numRecords = $('#numRecordsSelect');

var startDate = $('#start-year');

var endDate = $('#end-year');

var articleContainer = $('#resultsArea');

startDate += "0101";
endDate += "0101";

$('#executeRun').click(function() {


searchTerm = "bush";
startDate = "20160101";
endDate = "20170101";
numRecords = 20;


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "7efd7705bed343d498f6b717ffda6638",
  'q': searchTerm,
  'begin_date': startDate,
  'end_date': endDate,
  'page': Math.Ceil(numRecords/10),

});

$.ajax({
  url: url,
  method: 'GET',
})

.done(function(result) {
  console.log(result);


 for (var i = 0; i < result.length; i++) {
 	var container = $('<div>');
 	var index = i+1;
 	var headLine = $('<h1>');
 	var author = $('<h3>');
 	var section = $('<h4>');
 	var date = $('<h4>');
 	var link = $('<span>');


 	headLine = result.docs[i].headline.main;
 	author = result.docs[i].byline.original;
 	section = "Section: " + result[i].section_name;
 	date = result.docs[i].pub_date;
 	link = result.docs[i].web_url;

 	coonsole.log(result[i]);

 	container.append(index);
 	conatiner.append(headLine);
 	container.append(author);
 	container.append(section);
 	container.append(date);
 	contianer.append(link);

 	articleContainer.prepend(container);

 }  

})

.fail(function(err) {
  throw err;
});


});				// close onclick fucntion



$('#clearResults').click(function() {

	$('#resultsArea').empty();
	$('#search-term').empty();
	$('#start-year').empty();
	$('#end-year').empty();
	$('#numRecordsSelect').empty();


});



});			//document ready function close

