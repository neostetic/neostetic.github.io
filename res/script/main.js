const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const loader = document.getElementById('loader')
const loaderIcon = document.getElementById('loader-icon')

const href = async (url, anim) => {
    if (anim != false) {
        loader.style.display = "flex"
        loader.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)"
        await wait(10)
        loader.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
        await wait(600);
    }
    await window.open(url, '_self').focus();
    if (anim != false) {
        await wait(1)
        loader.style.display = "flex"
        loader.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
        await wait(1200)
        loader.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)"
        await wait(600)
        loader.style.display = "none"
    }
}

function setupScroller(div) {
    let src = div.getAttribute('src');
    let img = new Image();
    img.src = src;

    img.onload = () => {
        let ratio = img.height / img.width;

        div.style.backgroundImage = `url('${src}')`;
        div.style.backgroundSize = `100% auto`;
        div.style.height = `${div.offsetWidth * ratio}px`;

        if (div._anim) div._anim.cancel();

        div._anim = div.animate([
        { backgroundPosition: '0px 0px' },
        { backgroundPosition: `${div.offsetWidth}px 0px` }
        ], {
        duration: 10000,
        iterations: Infinity,
        easing: 'linear'
        });
    };
}

let scrollers = document.querySelectorAll('.img-scroller');
scrollers.forEach(setupScroller);

window.addEventListener('resize', () => {
    scrollers.forEach(setupScroller);
});

window.addEventListener("load", async () => {
    loader.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)"
    await wait(510);
    loader.style.display = "none"
    loaderIcon.style.display = 'none'
});

const scroller = document.getElementById("scroller");
const track = document.querySelector(".scroller-track");

const children = Array.from(track.children);

children.forEach(child => {
  track.appendChild(child.cloneNode(true));
});

children.forEach(child => {
  track.appendChild(child.cloneNode(true));
});

let posX = 0;
const speed = .4;
const threshold = track.scrollWidth / 3;

function animate() {
  posX -= speed;

  if (Math.abs(posX) >= track.scrollWidth / 3) {
    posX = 0;
  }

  track.style.transform = `translateX(${posX}px)`;
  requestAnimationFrame(animate);
}

animate();

const menuMobileButton = document.getElementById('menu-mobile-button')
const menuMobileContainer = document.getElementById('menu-mobile-container')

menuMobileContainer.onclick = () => { menuMobileButton.checked = false }

const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(async entries => {
    entries.forEach(async entry => {
        if (entry.isIntersecting) {
            await wait(20)
            entry.target.classList.add('visible');
        }
    });
});

elements.forEach(el => observer.observe(el));

const popup = document.getElementById('popup')
const popup_title = document.getElementById('popup-title')
const popup_description = document.getElementById('popup-description')
const popup_ok_msg = document.getElementById('popup-button')

const open_popup = async (title="Page not available", description="The page you are trying to open isn't available at the moment.", ok_message="OK") => {
    popup_title.innerHTML = title
    popup_description.innerHTML = description
    popup_ok_msg.innerHTML = ok_message
    console.log('start')
    popup.style.display = "flex";
    popup.style.opacity = "0";
    await wait(10);
    popup.style.opacity = "1"
}

const popupBtn = document.getElementById('popup-button')

popupBtn.onclick = async () => {
    popup.style.display = "flex";
    popup.style.opacity = "0";
    await wait(500);
    popup.style.display = "none";
} 

const moreProjects = document.getElementById('more-projects')
const moreProjectsMore = document.getElementById('more-projects-more')
const moreProjectsLess = document.getElementById('more-projects-less')

moreProjectsMore.onclick = async () => {
    moreProjectsMore.style.display = 'none'
    moreProjectsLess.style.display = 'block'
    moreProjects.style.display = "block"
    moreProjects.style.opacity = "0"
    await wait(200)
    moreProjects.style.opacity = '1'   
}

moreProjectsLess.onclick = async () => {
    moreProjectsLess.style.display = 'none'
    moreProjectsMore.style.display = 'block'
    moreProjects.style.display = "block"
    moreProjects.style.opacity = "1"
    await wait(10)
    moreProjects.style.opacity = '0'   
    await wait(200)
    moreProjects.style.display = "none"
}