window.addEventListener('load', async (event) => {
    document.getElementById('loader').style.opacity = '0';
    await sleep(1000);
    document.getElementById('loader').style.display = 'none';
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('window-x').onclick = () => {
    windowCloser('window');

}

document.getElementById('grid1').onclick = () => { windowOpener('window', 'span1') }
document.getElementById('grid2').onclick = () => { windowOpener('window', 'span2') }
document.getElementById('grid3').onclick = () => { windowOpener('window', 'span3') }
document.getElementById('grid4').onclick = () => { windowOpener('window', 'span4') }
document.getElementById('grid5').onclick = () => { windowOpener('window', 'span5') }
document.getElementById('grid6').onclick = () => { windowOpener('window', 'span6') }

const windowCloser = async (windowId) => {
    let styled = document.getElementById(windowId).style;
    styled.transform = 'scale(.4)';
    styled.top = '300%';
    await sleep(500);
    styled.display = 'none';
}

const windowOpener = async (windowId, divId) => {
    changeDivWindow(divId);
    let styled = document.getElementById(windowId).style;
    styled.display = 'block';
    await sleep(1);
    styled.transform = 'scale(1)';
    styled.top = '0';
}

const changeDivWindow = (divId) => {
    let childSpans = document.getElementById('window').getElementsByTagName('span');
    for (let i = 0; i < childSpans.length; i++)
    {
        let child = childSpans[i];
        child.style.display = 'none'
    }
    document.getElementById(divId).style.display = 'block';
}

let hireDiv = document.getElementById('hireDiv').style;
let hire = document.getElementById('hire').style;

document.getElementById('button').onclick = () => {
    hireOpener();
}

document.getElementById('hire-x').onclick = () => {
    hireCloser();
}

document.getElementById('hireCloser').onclick = () => {
    hireCloser();
}

const hireOpener = async () => {
    hire.display = 'block';
    await sleep(1);
    hire.background = 'rgba(0,0,0,.3)';
    hireDiv.right = '0';
}
const hireCloser = async () => {
    hire.background = 'rgba(0,0,0,0)';
    hireDiv.right = '-100%';
    await sleep(500);
    await sleep(100);
    hire.display = 'none';
}