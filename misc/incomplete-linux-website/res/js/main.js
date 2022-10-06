let shellIntro = document.getElementById('shellIntro');

const onload = () => {
    shellIntroAnimation();
}

const shellIntroAnimation = async () => {
    let randomNumber = Math.floor(Math.random() * 4);
    shellIntro.innerHTML = "<span></span>"
    await sleep(1500);
    if (randomNumber === 0) {
        await animateText("~bash version", shellIntro);
        await sleep(500);
        shellIntro.innerHTML += "<br>" +
            "GNU bash, version 4.3.46(1)-release (x86_64-pc-linux-gnu)<br>" +
            "Copyright (C) 2013 Free Software Foundation, Inc.<br>" +
            "License GPLv3+: GNU GPL version 3 or later &lt;http://gnu.org/licenses/gpl<br>" +
            "<br>" +
            "This is free software; you are free to change and redistribute it.<br>" +
            "There is NO WARRANTY, to the extent permitted by law.<br>";
    } else if (randomNumber === 1) {
        await animateText("cat readme.txt", shellIntro);
        await sleep(500);
        shellIntro.innerHTML += "<br>" +
            "Hello user!<br>" +
            "Welcome to the site<br>" +
            "<span></span>"
        await sleep(4000);
        await animateText("bash readme.txt", shellIntro);
        await sleep(500);
        shellIntro.innerHTML += "<br>" +
            "readme.txt: line 1: Hello: command not found<br>" +
            "readme.txt: line 2: Welcome: command not found<br>";
    } else if (randomNumber === 2) {
        await animateText("cat /etc/", shellIntro);
        await sleep(500);
        shellIntro.innerHTML += "<br>" +
            "# etc/shells: valid login shells<br>" +
            "/bin/sh<br>" +
            "/bin/dash<br>" +
            "/bin/bash<br>" +
            "/bin/rbash<br>" +
            "/usr/bin/screen<br>" +
            "/bin/ksh93<br>" +
            "/bin/rksh93<br>" +
            "/bin/tcsh<br>" +
            "/usr/bin/tcsh<br>";
    } else if (randomNumber === 3) {
        await animateText("date", shellIntro);
        await sleep(500);
        shellIntro.innerHTML += "<br>" +
            Date() +
            "<br>";
    }
    shellIntro.innerHTML += "<span></span>";
    await sleep(4000);
    await animateText("cls", shellIntro);
    await sleep(1000);
    shellIntroAnimation();
}

const animateText = async (text, elementInner) => {
    for (let i = 0; i < text.length; i++) {
        elementInner.innerHTML += text[i];
        await sleep(120);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}