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

// Rotator Hover Logic
function handleImageHover(event) {
  const image = event.target;
  const originalSrc = image.dataset.originalSrc || image.src;
  image.dataset.originalSrc = originalSrc;  // Speichern des Originalbildes

  // Wechsel zum zweiten Bild
  if (originalSrc.includes('.png')) {
    image.src = originalSrc.replace('.png', '_2.png');
  }
}

function handleImageMouseOut(event) {
  const image = event.target;
  const originalSrc = image.dataset.originalSrc;

  // Zurück zum Originalbild beim Verlassen des Hover-Effekts
  image.src = originalSrc;
}

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

  // Rotator Hover-Effekt
  const rotatorImages = document.querySelectorAll('.rotator img');
  rotatorImages.forEach(image => {
    image.addEventListener('mouseenter', handleImageHover);
    image.addEventListener('mouseleave', handleImageMouseOut);
  });

  // Produktkarten Hover-Effekt
  const productCardImages = document.querySelectorAll('.product-card img');
  productCardImages.forEach(image => {
    image.addEventListener('mouseenter', handleImageHover);
    image.addEventListener('mouseleave', handleImageMouseOut);
  });

  const dropdownToggle = document.querySelector(".dropdown-toggle");
  dropdownToggle.addEventListener("click", function(event) {
    event.preventDefault();
  });

  const links = document.querySelectorAll(".header-center ul li a");
  const currentUrl = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    }
  });
});
