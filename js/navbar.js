var button = document.getElementById("button");
var options = document.getElementsByClassName("hide");

var openOptions = function()
{
    var hide = document.getElementById("hide");
    hide.className = hide.className.replace("hide", "");  
    button.removeEventListener('click', openOptions);
    button.addEventListener('click', closeOptions);
}

var closeOptions = function()
{
    var hide = document.getElementById("hide");
    hide.className += "hide";
    button.removeEventListener('click', closeOptions);
    button.addEventListener('click', openOptions);
}


button.addEventListener('click', openOptions);
