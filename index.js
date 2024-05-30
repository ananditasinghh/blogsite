
let currentSlide = 0;
const slides = document.querySelectorAll('#slider img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function loadMoreBlogs() {
  
  document.body.style.transition = 'opacity 0.5s';
  document.body.style.opacity = 0;

 
  setTimeout(() => {
    
    window.location.href = 'blogpage.html';
  }, 900); 
}