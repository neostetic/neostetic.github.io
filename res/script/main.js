window.addEventListener("load", async () => {
    document.getElementById('loader').style.opacity = '0';
    await sleep(1000);
    document.getElementById('loader').style.display = 'none';
})

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let detailsButton = document.getElementById('details-button');
detailsButton.onclick = () => {
    let detailsText = document.getElementById('details-text');
    if (detailsText.style.display !== 'inline') {
        detailsText.style.display = 'inline';
        detailsButton.classList.remove('switch-down');
        detailsButton.classList.add('switch-up');
    } else {
        detailsText.style.display = 'none';
        detailsButton.classList.remove('switch-up');
        detailsButton.classList.add('switch-down');
    }
}