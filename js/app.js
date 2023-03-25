// ============================================================================
// Rock Types Slideshow
// ============================================================================

// Initalize on first slide
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Slideshow fuction
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //Initiate the animation here before slide change
  slides[slideIndex-1].style.animationPlayState = 'running';

  //Change slide and dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}