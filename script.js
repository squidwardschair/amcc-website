let slideIndex = 0;
showSlides();
typingAnimation()

function showSlides(newSlide) {
  let i;
  let isSame = slideIndex==newSlide
  let slides = document.getElementsByClassName("img-slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex-1].className += " active";
  if (!isSame) {
    setTimeout(showSlides, 7500);
  }
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function typingAnimation() {
    new TypeIt("#hero-ani", {
        strings: ["<mark>Code</mark> Your Future", "<mark>Model</mark> Your World", "<mark>Push</mark> Your Limits"],
        speed: 75,
        loop: true,
        cursor: true,
        breakLines: false,
        nextStringDelay: [3500, 1000],
    }).go()
}