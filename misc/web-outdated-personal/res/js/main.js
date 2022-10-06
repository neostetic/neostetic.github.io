const popupAnim = "popUp .8s ease";
const popdowmAnim = "popDown .8s ease";

let projectInner = document.getElementById("projectInner");

let about = document.getElementById("about-popup");
document.getElementById("about-click").onclick = function () {
    about.style.display = "table";
    about.style.animation = popupAnim;
}
document.getElementById("about-popup-x").onclick = function () {
    about.style.animation = popdowmAnim;
    setTimeout(function (){
        about.style.display = "none";
    }, 760)
}

function setMain(id) {
    document.getElementById("a-home").classList.remove("onpage");
    document.getElementById("a-github").classList.remove("onpage");
    document.getElementById("a-projects").classList.remove("onpage");
    document.getElementById("a-school").classList.remove("onpage");
    let element = document.getElementById(id);
    element.classList.add("onpage");
}

document.getElementById("errorClick").onclick = function () {
    document.getElementById("errorMessage").style.opacity = 0;
    setTimeout(function (){
        document.getElementById("errorMessage").style.display = "none";
    }, 490)
}