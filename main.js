let slideIndexEssential = 1;
let slideIndexExecutive = 1;

showSlides(slideIndexEssential, 'essential');
showSlides(slideIndexExecutive, 'executive');

function plusSlides(n, type) {
  if (type === 'essential') {
    showSlides(slideIndexEssential += n, 'essential');
  } else if (type === 'executive') {
    showSlides(slideIndexExecutive += n, 'executive');
  }
}

function showSlides(n, type) {
  let i;
  let slides;
  if (type === 'essential') {
    slides = document.getElementsByClassName("essential-container")[0].getElementsByClassName("image-slider")[0].getElementsByTagName("img");
    if (n > slides.length) { slideIndexEssential = 1; }
    if (n < 1) { slideIndexEssential = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndexEssential - 1].style.display = "block";
  } else if (type === 'executive') {
    slides = document.getElementsByClassName("executive-container")[0].getElementsByClassName("image-slider")[0].getElementsByTagName("img");
    if (n > slides.length) { slideIndexExecutive = 1; }
    if (n < 1) { slideIndexExecutive = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndexExecutive - 1].style.display = "block";
  }
}
