
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
    // Add a fade-out effect before navigating to the new page
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = 0;

    // Simulate loading more blogs (replace this with your actual logic)
    // For now, simply navigate to another page after a short delay
    setTimeout(() => {
      // You can replace the URL with the actual page you want to redirect to
      window.location.href = '/Users/ananditasingh/Desktop/blogsite/blogpage/blogpage.html';
    }, 900); // Adjust the delay as needed
  }


