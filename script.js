let slideIndex = 1;

function showSlides(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (index > slides.length) {
    slideIndex = 1;
  } else if (index < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => (slide.style.display = 'image'));
  dots.forEach((dot) => (dot.style.backgroundColor = '#bbb'));

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].style.backgroundColor = '#717171';
}

function currentSlide(index) {
  showSlides((slideIndex = index));
}

showSlides(slideIndex);
setInterval(() => showSlides(++slideIndex), 3000); // Auto slide every 3 seconds
