window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  let scale_bg = scrollY * 0.005 + 1
  if (scale_bg < 1) { scale_bg = 1 }
  document.querySelector('.parallax-img').style.transform =
    `translateY(${scrollY * 0.3}px) scale(${scale_bg})`;
});