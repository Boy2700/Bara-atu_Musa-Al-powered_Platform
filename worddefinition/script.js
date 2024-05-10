$(document).ready(function() {

	$('#btn-wiki').click(function() {
//clearing the content of the results
    $('.wiki-results').empty();
    var search = $('#wiki-search-input').val();
   
		$.ajax({
      type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + search,
      dataType: 'jsonp',
      success: function(result) {
        console.log(result);
        var obj = result.query.pages;
        for (var prop in obj) {
          $('.wiki-results').append('<a target="_blank" href="https://en.wikipedia.org/wiki?curid=' + obj[prop].pageid + '">' + '<div class="card card-block my-2"><h3>' + obj[prop].title + '</h3><p>' + obj[prop].extract + '</p></div></a>');
        }
      }
    });
  });
//Search after search button clicked.
  $('#wiki-search-input').keypress(function(event) {
    if (event.which == 10) {
      $('#btn-wiki').click();
    }
  });
});