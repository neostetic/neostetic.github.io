/*
* Functions can be called out in Console:
* - generateTitle(title_id)     // generates popup title (0-60)
* - generateColor(color_id)     // generates background and titlebox color (0-360)
* - titleEvent(event_id)        // tiled to title event (0-15)
* */


let title = document.getElementById("title");
let lastTitles = -1;

function redirect(directon) {
    if (directon === "mail") {
        window.open('mailto:gg.polacek@gmail.com', '_blank');
    } else if (directon === "twitter") {
        window.open('https://twitter.com/neostetic', '_blank');
    }
}

function generateTitle(title_id) {
    const titles = [
        "This title doesn't exists",
        "Ooooooaaaaaoooooaaooaa.exe",
        "cool-err0r.exe",
        "I haven't been drinking ;*",
        "ඞ11ඞඞඞ1 amogus ඞ1ඞඞ11ඞ",
        "Look at me, I am a windooow!",
        "Brain stopped working!",
        "click <span class='inner-href' onclick='titleEvent(1)'>here</span>",
        "UwU",
        "Broken.bat \"Say my name!\"",
        "missing prompt, rebooting<span class='inner-dot'>.</span",
        "I have found this!",
        "my credit card number is 7..",
        "IamDev.exe",
        "SnIperMonkeyP.exe",
        "I'm blue, ba da bee da ba ..",
        "",
        "moz!//a - cool name tho..",
        "XOXOXOXOX",
        "Your data were corrupted!",
        "shrek-is-love.bat",
        "Hi, my name is neostetic",
        "IguessImBetter.cmd",
        "Do you know deez? Suggon d..",
        "spyro3-yearofthedragon.iso",
        "S#%T, F@$K, B!%@H",
        "you opened the wrong file",
        "<span class='inner-smile'></span>",
        "Are you still there? o.o",
        "GhostHunter.bat",
        "\"I'm a virgin\" he said!",
        "My mommy would be proud!",
        "file not found;sorry i guess",
        "index.html",
        "><input class='inner-input' value='your title here'/>",
        "you've got virus",
        "ILOVEYOU.exe",
        "generateColor(color_id);",
        "generateTitle(title_id);",
        "gmod.exe's error",
        "My nickname is HARD AS COC..",
        "&#128125; &#128125; &#128125; &#128125;",
        "../script/main-js.js",
        "dead.bit.cmd - developers",
        "Calculator: "+lastTitles+"+"+(lastTitles+11)+"="+(lastTitles+lastTitles+11)+"",
        "&#128526; Calculator: "+lastTitles+"+"+(lastTitles+11)+"="+((lastTitles+13)/2).toFixed(0)+"",
        "Calculator: "+lastTitles+"+"+(lastTitles+11)+"="+((lastTitles+6)/3).toFixed(2)+"",
        "style.css - 265 lines loaded",
        "\"You've got mail!\"",
        "freeWinXP.exe",
        "\"Am I missing something?\"",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v a p o r w a v e",
        "%username% welcome back",
        "I am to sad to read this <span class='inner-smile'></span>",
        "This window sucks.",
        "your pc: \"pls make it stop!\"",
        "bababooe.exe",
        "Norton360.exe - Antivirus",
        "Your file is corrupted!",
        "readme.txt",
        "and his name is John Cena",
        "programming sucks",
        "404 - Page not found",
        "<span class='inner-smile'></span> <span class='inner-smile'></span> <span class='inner-smile'></span>",
        "did anybody saw shrek?",
        "I support LGBTQ+",
        "So sad that you are Emo",
        "FATAL ERROR x 795 Errors",
        "Your WiFi sucks!",
        "I don't give a f*",
        "Date()",
        "Never gona give you up...",
        "How lucky am I?.exe",
        "Tadeáš Karban.exe",
        "This dev sucks.",
        "Stepwindow, I'm stuck. Co...",
        "1",
        "Error: Work harder!",
        "My balls are shrinking",
        "That last one was funny!",
        "Waiting",
        "There are tons of EasterEggs",
        "Fart",
        "My wife left me",
        "Pending",
        "🎲 🎲 RollOrbit 🎲 🎲",
        "IDK IF I AM A BOY",
        "Coom",
        "hello agian <span class='inner-smile'></span>",
        "Couldn't find Windows 9",
        "You can't click on me",
        "whoMadeThisSite.html",
        "Don't even talk to me...",
        "I married bricks",
        "e a d g b e",
        "Window don't want to live",
        "If you are reading this...",
        "I will sh!t your pants",
        "Does whatever spider can",
        "I am loading still",
        "404 - Page found",
        "O2 Error: H20",
        "Scanning Failed",
        "100",
        "I am happy you are happy",
        "Bindowns Error",
        "Ochi ni san ariga too",
        "Leroy Jenkins",
        "POPUP ERROR",
        "made by neostetic"
    ]
    if (title_id >= 0) {
        console.log("Title ID: "+title_id);
    } else {
        title_id = Math.floor((Math.random() * titles.length));
        if (title_id === lastTitles) {
            title_id++
        }
        console.log("Generated Title ID: "+title_id);
    }
    lastTitles = title_id;
    title.innerHTML = titles[title_id];
}

function generateColor(color_id) {
    if (color_id >= 0) {
        console.log("Color ID: "+color_id);
    } else {
        color_id = Math.floor((Math.random() * 360));
        console.log("Generated Color ID: "+color_id);
    }
    document.documentElement.style.setProperty('--color', color_id);
}

function titleEvent(event_id) {
    if (event_id === 1) {
        title.innerHTML = "and <span class='inner-href' onclick='titleEvent(2)'>here</span>";
    } else if (event_id === 2) {
        title.innerHTML = "now ------> <span class='inner-href' onclick='titleEvent(3)'>here</span>";
    } else if (event_id === 3) {
        title.innerHTML = "<span class='inner-href' onclick='titleEvent(4)'>congrats!</span>";
    } else if (event_id === 4) {
        title.innerHTML = "you've got<span class='inner-href' onclick='titleEvent(5)'>,</span> nothing";
    } else if (event_id === 5) {
        title.innerHTML = "Good <span class='inner-href' onclick='titleEvent(6)'>Job</span> Boomer";
    } else if (event_id === 6) {
        title.innerHTML = "ok, <span class='inner-href' onclick='titleEvent(7)'>there</span> is nothing left";
    } else if (event_id === 7) {
        title.innerHTML = "Ok, i mean <span class='inner-href' onclick='titleEvent(8)'>it</span>";
    } else if (event_id === 8) {
        title.innerHTML = "OK, now <span class='inner-href' onclick='titleEvent(9)'>it</span> ends";
    } else if (event_id === 9) {
        title.innerHTML = "I have said <span class='inner-href' onclick='titleEvent(10)'>that</span>.";
    } else if (event_id === 10) {
        title.innerHTML = "i need to <span class='inner-href' onclick='titleEvent(11)'>stop</span>";
    } else if (event_id === 11) {
        title.innerHTML = "actually, there is no <span class='inner-href' onclick='titleEvent(12)'>point</span>";
    } else if (event_id === 12) {
        title.innerHTML = "luckily, i can end <span class='inner-href' onclick='titleEvent(13)'>it</span>";
    } else if (event_id === 13) {
        title.innerHTML = "<span class='inner-href' onclick='titleEvent(14)'> whenever i want</span>";
    } else if (event_id === 14) {
        title.innerHTML = "cool-err0r<span class='inner-href' onclick='titleEvent(15)'>.</span>exe";
    } else if (event_id === 15) {
        title.innerHTML = "man, fuck you<span class='inner-href' onclick='titleEvent(16)'>.</span>";
    } else if (event_id === 16) {
        title.innerHTML = "Sneaky <span class='inner-href' onclick='titleEvent(17)'>right?</span>";
    } else if (event_id === 17) {
        title.innerHTML = "SO MEAN <span class='inner-href' onclick='titleEvent(18)'>TO</span> ME";
    } else if (event_id === 18) {
        title.innerHTML = "<span class='inner-href' onclick='titleEvent(19)'>Okay</span>, last one";
    } else if (event_id === 19) {
        title.innerHTML = "<span class='inner-href' onclick='titleEvent(20)'>soon</span>";
    } else if (event_id === 20) {
        title.innerHTML = "<span class='inner-href' onclick='titleEvent(21)'>almost there</span>";
    } else if (event_id === 21) {
        title.innerHTML = "<span class='inner-href' onclick='titleEvent(22)'>so</span> close";
    } else if (event_id === 22) {
        title.innerHTML = "This is <span class='inner-href' onclick='titleEvent(23)'>the one</span>";
    } else if (event_id === 23) {
        title.innerHTML = "Hold on<span class='inner-href' onclick='titleEvent(24)'>!</span>";
    } else if (event_id === 24) {
        title.innerHTML = "<span class='inner-href' onclick='titleEvent(25)'>There you go!</span>";
    } else if (event_id === 25) {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        title.innerHTML = "Never gonna give you up!";
    }
}