let lang1text = document.getElementById("lang1text");
lang1text.oninput = change;

function change() {
    document.getElementById("lang1max").innerHTML = lang1text.value.length;
}

let r = 360;
let langSwitch = document.getElementById("lang-switch");
langSwitch.onclick = function () {
    let lang1val = document.getElementById("lang1");
    let lang2val = document.getElementById("lang2");
    let lang1text = document.getElementById("lang1text");
    let lang2text = document.getElementById("lang2text");
    let switcher = lang1val.value;
    let switcherText = lang1text.value;
    lang1val.value = lang2val.value;
    lang2val.value = switcher;
    lang1text.value = lang2text.value;
    lang2text.value = switcherText;
    langSwitch.style.transform = "rotate(" + r + "deg)";
    r += 360;
    change();
}

let theme = true;
let themeButton = document.getElementById("themeButton");
themeButton.onclick = function () {
    if (theme) darkmode();
    else lightmode();
}


function darkmode() {
    document.documentElement.style.setProperty('--main-color', '#d56e08');
    document.documentElement.style.setProperty('--main-black', 'white');
    document.documentElement.style.setProperty('--background', '#0a0704');
    document.documentElement.style.setProperty('--background-bg1', '#0a0704');
    document.documentElement.style.setProperty('--background-bg2', '#0a0704');
    document.documentElement.style.setProperty('--background-bg3', '#cd7308');
    document.documentElement.style.setProperty('--background-bg4', '#a3520e');
    document.documentElement.style.setProperty('--shadow', 'rgba(255,255,255,.05)');
    document.documentElement.style.setProperty('--shadow-hover', 'rgba(255,255,255,.07)');
    document.getElementById("sun").style.display = "none";
    document.getElementById("mun").style.display = "block";
    theme = false;
}

function lightmode() {
    document.documentElement.style.setProperty('--main-color', '#2a91f7');
    document.documentElement.style.setProperty('--main-black', 'black');
    document.documentElement.style.setProperty('--background', '#f5f8fb');
    document.documentElement.style.setProperty('--background-bg1', '#f5f7fb');
    document.documentElement.style.setProperty('--background-bg2', '#f3f6fa');
    document.documentElement.style.setProperty('--background-bg3', '#318bf7');
    document.documentElement.style.setProperty('--background-bg4', '#5daef1');
    document.documentElement.style.setProperty('--shadow', 'rgba(0,0,0,.15)');
    document.documentElement.style.setProperty('--shadow-hover', 'rgba(0,0,0,.20)');
    document.getElementById("sun").style.display = "block";
    document.getElementById("mun").style.display = "none";
    theme = true;
}