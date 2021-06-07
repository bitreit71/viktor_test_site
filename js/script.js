document.addEventListener('DOMContentLoaded', () => {
  const scrollItems = document.querySelectorAll('.scroll-item');

  const scrollAnimation = () => {
    let windowCenter = (window.innerHeight / 1.46) + window.scrollY;
    console.log(windowCenter)
    scrollItems.forEach(el => {
      let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
      if (windowCenter >= scrollOffset) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  };

  scrollAnimation();
  window.addEventListener('scroll', () => {
    scrollAnimation();
  });
});


