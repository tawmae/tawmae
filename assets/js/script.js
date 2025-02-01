var slides, indicators, currentIndex = 0;

function showSlide(i) {
  slides[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active");
  slides[i].classList.add("active");
  indicators[i].classList.add("active");
  currentIndex = i;
}

function nextSlide() {
  var i = (currentIndex + 1) % slides.length;
  showSlide(i);
}

function prevSlide() {
  var i = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(i);
}

// Fade-in und Fade-out für Bilder
function handleImageHover(event, isRotator = false) {
  const image = event.target;
  const originalSrc = image.src;
  
  // Setzt das Originalbild in das Dataset für später
  image.dataset.originalSrc = originalSrc; 
  image.src = originalSrc.replace('.png', '_2.png'); 

  // Fade-out Bild und dann Fade-in für das neue Bild
  image.classList.add('fade-out');

  // Auf `mouseleave` zurück zum Originalbild und einblenden
  image.addEventListener('transitionend', () => {
    if (image.classList.contains('fade-out')) {
      image.src = image.dataset.originalSrc;
      image.classList.remove('fade-out');
      image.classList.add('fade-in'); // Fade-in anwenden
    }
  });
}

// Warten Sie, bis die Seite vollständig geladen ist, bevor wir alles initialisieren
document.addEventListener("DOMContentLoaded", function() {
  slides = document.querySelectorAll(".rotator a");
  indicators = document.createElement("div");
  document.querySelector(".rotator-indicators").appendChild(indicators);
  indicators.remove();
  indicators = [];

  slides.forEach(function(_, i) {
    var d = document.createElement("div");
    d.className = "indicator";
    d.addEventListener("click", function() {
      showSlide(i);
    });
    document.querySelector(".rotator-indicators").appendChild(d);
    indicators.push(d);
  });

  slides[0].classList.add("active");
  indicators[0].classList.add("active");

  setInterval(nextSlide, 8000);

  // Produktkarten
  const productCardImages = document.querySelectorAll('.product-card img');
  productCardImages.forEach(image => {
    image.addEventListener('mouseenter', (event) => handleImageHover(event));
  });

  // Rotator
  const rotatorImages = document.querySelectorAll('.rotator img');
  rotatorImages.forEach(image => {
    image.addEventListener('mouseenter', (event) => handleImageHover(event, true)); // true für Rotator
  });

  // Dropdown-Menü-Handling
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  dropdownToggle.addEventListener("click", function(event) {
    event.preventDefault();
  });

  // Markiere den aktiven Menü-Link
  const links = document.querySelectorAll(".header-center ul li a");
  const currentUrl = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    }
  });
});
