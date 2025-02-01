document.addEventListener("DOMContentLoaded", function() {
  console.log("Script loaded");
  // Set longString in Import-Section
  const longString = "VGhpcyBpcyBhIHZlcnkgbG9uZyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdGhhdCB3aWxsIGJlIGNvcGllZCB0byBjbGlwYm9hcmQ=";
  const importStringElem = document.querySelector(".import-string");
  if (importStringElem) {
    importStringElem.innerText = longString;
    console.log("Import string set:", longString);
  } else {
    console.error("Kein Element mit Klasse .import-string gefunden");
  }

  // Rotator Setup
  let currentIndex = 0;
  const slides = document.querySelectorAll('.rotator a');
  const indicatorsContainer = document.querySelector('.rotator-indicators');
  const slideTitleEl = document.querySelector('.slide-title');
  const slideTitles = ["Spotify", "Movie and TV Show Quiz", "All In One Moderation Tools", "Bluesky"];

  if (slides.length === 0) {
    console.error("Keine Slides im Rotator gefunden");
  }
  
  slides.forEach((slide, index) => {
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    indicator.addEventListener("click", function() { goToSlide(index); });
    indicatorsContainer.appendChild(indicator);
  });
  const indicators = document.querySelectorAll('.indicator');

  function updateSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
    slideTitleEl.classList.add("hidden");
    setTimeout(() => {
      slideTitleEl.textContent = slideTitles[currentIndex];
      slideTitleEl.classList.remove("hidden");
    }, 500);
  }
  window.nextSlide = function() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }
  window.prevSlide = function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  }
  window.goToSlide = function(index) {
    currentIndex = index;
    updateSlide();
  }
  updateSlide();
  setInterval(nextSlide, 8000);

  // Render dynamic contents
  renderDynamicContents();
});

function copyImportString(btn) {
  const longString = "VGhpcyBpcyBhIHZlcnkgbG9uZyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdGhhdCB3aWxsIGJlIGNvcGllZCB0byBjbGlwYm9hcmQ=";
  navigator.clipboard.w
