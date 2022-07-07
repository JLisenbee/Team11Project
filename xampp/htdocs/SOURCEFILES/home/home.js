var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = 
function() { 
if (this.readyState == 4 && this.status == 200) { 
    var homeList = JSON.parse(this.responseText)
    var linkText = "";
    for (var i = 0; i < homeList.length; i++) {

        if(i == 0) var newItem = $("<div href='../movies/movies.html'></div>").addClass("item");
        else if (i == 1) var newItem = $("<div href='../games/games.html'></div>").addClass("item");
        else var newItem = $("<div></div>").addClass("item");
        $(newItem).append($('<b></b>').text(homeList[i].name).addClass("title"))
        $(newItem).append($('<p></p>').text(homeList[i].description).addClass("desc"))
        $(newItem).click(function() {
            $(".item").css("border", "3px dotted black");
            $(this).css("border", "3px solid red");
        });
        if(i == 0) $(newItem).append($("<link href='../movies/movies.html'>"))
        if(i == 1) $(newItem).append($("<link href='../games/games.html'>"))
        $(".demo").append(newItem)
    }
} 
}; 
xhttp.open("GET", "home.json", true); 
xhttp.send(); 