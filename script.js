 let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// For the card navigation
document.addEventListener("DOMContentLoaded", function () {
  const menButton = document.getElementById("menButton");
  const womenButton = document.getElementById("womenButton");
  const menItems = document.getElementById("menItems");
  const womenItems = document.getElementById("womenItems");

  menButton.addEventListener("click", function () {
    menItems.style.display = "flex";
    womenItems.style.display = "none";
  });

  womenButton.addEventListener("click", function () {
    womenItems.style.display = "flex";
    menItems.style.display = "none";
  });

  // Default display
  menItems.style.display = "none";
  womenItems.style.display = "none";
});
