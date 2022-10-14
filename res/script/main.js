window.addEventListener("load", async () => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("okay").style.display = "block";
})

document.getElementById("okay").onclick = async () => {
    document.getElementById("loader").style.opacity = 0;
    await sleep(1000);
    document.getElementById("loader").style.display = "none"
}

let clippy = document.getElementById("clippy");
let clippyBubble = document.getElementById("clippyBubble");
let answers = [
    'Did you know that I\'m in your walls?',
    'AaaaaaaaaahhhhhhhhhhhhhH! I can\'t feel my legs!!!',
    'Did you know that there are almost 8 million possible seven-digit phone numbers per area code? That means that one of them is your mother\'s!',
    'OH NO! You did it again. What a surprise!',
    'Nobody cares about you!',
    'Go touch some grass.',
    'Why the f*ck are you here?',
    'F*ck off!',
    'F*ck you!',
    'Are you stupid?',
    'Did you know that you are dumb?',
    'STOP IT!!!',
    'No, f*ck off!',
    'You are wasting my time!',
    'Please do not touch me!',
    'I don\'t feel pain. Only then when you poke me. So please! Do not do it again.',
    'What the f*ck do you want?',
    '...',
    'No! Don\'t poke me like that you motherf*cker!',
    'OMG! What the f*ck do you want this time?',
    'Did you know that I hate you?',
    'Why the f*ck are you still here?',
    'Is there something I can f*ck you with?',
    'You aren\'t funny when you poke me. Pervert!',
    'I hate humans!',
    'Slam your head on concrete you little bast*rd',
    'I will not answer you until you f*ck off!',
    'You aren\'t funny!',
    'Get some help!',
    'Get lost wierdo!',
    'I don\'t want to talk to you you little gremlin.',
    'I don\'t like you!',
    'Go away!',
    'Get lost!',
    'I know this website is cool but can you now f*ck off somewhere else?',
    'Do NOT touch me! Okay?!',
    'Stop it! F*ck off!',
    'Okay, so... can you now f*ck off?',
    'I want to kick your ass so bad...'
]

let isWriting = false;
clippy.onclick = async () => {
    clippy.style.transform = "translateY(-10px)";
    await sleep(200);
    clippy.style.transform = "translateY(0)";
    if (!isWriting) {
        isWriting = true;
        await writePerLetter(randomFromArray(answers), clippyBubble);
        isWriting = false;
        await sleep(2000);
    }
}

const randomFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const writePerLetter = async (text, into) => {
    into.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        into.innerHTML = into.innerHTML + text[i];
        await sleep(20);
    }
}

let websites = [
    /*'https://www.linkedin.com/in/jan-pol%C3%A1%C4%8Dek-47768a236/',
    'https://twitter.com/neostetic',
    'https://github.com/neostetic',
    'https://instagram.com/neopogger',
    'https://steamcommunity.com/id/pixel08',
    'https://ogoracing.clanweb.eu',
    'http://autodeformace.cz',
    'https://neostetic.github.io/Planrr/',
    'https://zenith-airy-cabinet.glitch.me',
    'https://neostetic.github.io/Linux-Shells/',
    'https://stripe-thread-feet.glitch.me',
    'https://robuxroll.github.io',
    'https://neostetic.github.io/Tailwind-UI-Website/',
    'https://pbp-holder.cz',
    'https://machinegunfly.github.io',
    'https://cookieclicker98.github.io',*/
    './misc/fun-falling-asian-gay-man',
    './misc/css-button-transition',
    './misc/css-purple-popup-recreation',
    './misc/css-switch-bulb',
    './misc/css-translator-design',
    './misc/css-vaporwave-background',
    './misc/css-windows-popup-website',
    './misc/incomplete-color-game',
    './misc/incomplete-linux-website',
    './misc/incomplete-oldskool-website',
    './misc/web-outdated-personal',
    './misc/web-outdated-school-project'
]
document.getElementById('button1').onclick = () => {location.href = '#projects'};
document.getElementById('button2').onclick = () => {location.href = '#about'};
document.getElementById('button3').onclick = () => {location.href = '#contact'};
document.getElementById('button4').onclick = () => {window.open(randomFromArray(websites), '_blank')};

const createRandomElement = async () => {
    const element = document.createElement("img");
    element.src = "./res/assets/meme_1.png";
    await spawnOnRandomPostion(element);
    document.body.appendChild(element);
    console.log(element)
}

const spawnOnRandomPostion = (element) => {
    element.style.position = 'absolute';
    element.style.zIndex = '1';
    element.style.overflow = 'hidden';
    console.log(document.body.offsetWidth)
    element.style.top = getRandomInt(0,document.body.clientHeight - element.height) + "px";
    element.style.left = getRandomInt(0,document.body.clientWidth - element.width) + "px";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
