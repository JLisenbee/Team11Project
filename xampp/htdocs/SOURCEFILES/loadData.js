const DIV = "<div></div>"
var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = 
function() { 
if (this.readyState == 4 && this.status == 200) { 
    var dataList = JSON.parse(this.responseText)
    for (var i = 0; i < dataList.length; i++) {
        var newData = $(DIV).addClass("entry");
        $(newData).append($("<img src='" + dataList[i].poster + "'/>").addClass("poster"))
        var textFields = $(DIV).addClass("textFields")
        $(textFields).append($(DIV).text(dataList[i].title))
        $(textFields).append($(DIV).text(dataList[i].description))
        $(newData).append(textFields)
        $(newData).click(function() {
            $(".entry").css("border", "");
            $(this).css("border", "3px solid red");
        });
        $(".menu").append(newData)
    }
} 
}; 
xhttp.open("GET", $('script[src*=loadData]').attr('dataFile'), true); 
xhttp.send(); 
// $(newGame).append($("<img src='" + gamesList[i].logo + "_gameplay.png'/>").addClass("gameplay"))