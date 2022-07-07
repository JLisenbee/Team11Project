var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = 
function() { 
if (this.readyState == 4 && this.status == 200) { 
    var moviesList = JSON.parse(this.responseText)
    for (var i = 0; i < moviesList.length; i++) {
        var newMovie = $('<div></div>').addClass("movie");
        $(newMovie).append($('<div></div>').text(moviesList[i].title).addClass("title"))
        $(newMovie).append($("<img src='" + moviesList[i].poster + "'/>").addClass("poster"))
        $(newMovie).append($('<div></div>').text(moviesList[i].description))
        $(newMovie).click(function() {
            //border: 3px solid black;
            $(".movie").css("border", "3px dotted black");
            $(this).css("border", "3px solid red");
        });
        $(".demo").append(newMovie)
    }
} 
}; 
xhttp.open("GET", "movies.json", true); 
xhttp.send(); 