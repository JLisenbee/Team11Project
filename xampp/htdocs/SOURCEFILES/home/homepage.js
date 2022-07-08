var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = 
function() { 
if (this.readyState == 4 && this.status == 200) { 
    var homeList = JSON.parse(this.responseText)
    for (var i = 0; i < homeList.length; i++) {
        var newItem = $(`<div data-path="${homeList[i].linkPath}"></div>`).addClass("item");
        $(newItem).append($('<b></b>').text(homeList[i].name).addClass("title"))
        $(newItem).append($('<p></p>').text(homeList[i].description).addClass("desc"))
        $(newItem).click(function() {
            window.location.href = "../" + $(this).data('path');
        });
        $(".demo").append(newItem)
    }
} 
}; 
xhttp.open("GET", "homepage2.json", true); 
xhttp.send(); 