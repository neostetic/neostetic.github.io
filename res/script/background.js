window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelector('.parallax-img').style.transform =
    `translateY(${scrollY * 0.3}px) scale(${scrollY * 0.005 + 1})`;
});