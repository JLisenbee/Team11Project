const DIV = "<div></div>"
var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = 
function() { 
if (this.readyState == 4 && this.status == 200) { 
    var gamesList = JSON.parse(this.responseText)
    //gamesList.length
    for (var i = 0; i < gamesList.length; i++) {
        var newGame = $(DIV).addClass("game");
        $(newGame).append($("<img src='" + gamesList[i].logo + ".png'/>").addClass("poster"))
        var textFields = $(DIV).addClass("textFields")
        $(textFields).append($(DIV).text(gamesList[i].name))
        $(textFields).append($(DIV).text(gamesList[i].description))
        $(newGame).append(textFields)
        $(newGame).click(function() {
            $(".game").css("border", "3px dotted black");
            $(this).css("border", "3px solid red");
        });
        $(".menu").append(newGame)
    }
} 
}; 
xhttp.open("GET", "games.json", true); 
xhttp.send(); 
// $(newGame).append($("<img src='" + gamesList[i].logo + "_gameplay.png'/>").addClass("gameplay"))