function loader(){
    var main = document.getElementById("input1").value;
    var second = document.getElementById("input2").value;
    var deg = document.getElementById("input3").value;
    document.documentElement.style.setProperty('--main-color', main);
    document.documentElement.style.setProperty('--secondary-color', second);
    document.documentElement.style.setProperty('--deg', deg);
}