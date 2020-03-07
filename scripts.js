function menuClick() {
    var menuBar = document.getElementById("menuBar");
    var menuButton = document.getElementById("menuButton");
    var dropDown = document.getElementById("dropDown");

    if(menuButton.className == "las la-bars la-2x") {
        menuButton.className = "las la-times la-2x";
        dropDown.style.display = "block";
        dropDown.classList.remove("fadeOut");
        dropDown.classList.add("fadeIn");
        dropDown.style.boxShadow = "0px 0px 3px 3px";
        menuBar.style.boxShadow = "none";
    }
    else {
        menuButton.className = "las la-bars la-2x";
        dropDown.classList.remove("fadeIn");
        dropDown.classList.add("fadeOut");
        dropDown.style.boxShadow = "none";
        menuBar.style.boxShadow = "0px 0px 3px 3px";
    }
}