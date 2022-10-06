function onload(){
    document.getElementById("loader").style.transition = "1s";
    setTimeout(onload2, 5627);
}

function onload2(){
    document.getElementById("loader").style.opacity = "0";
    setTimeout(onend, 1000);
}

function onend(){
    document.getElementById("loader").style.display = "none";
}