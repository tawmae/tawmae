document.addEventListener("DOMContentLoaded", function() {
  const longString = "VGhpcyBpcyBhIHZlcnkgbG9uZyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdGhhdCB3aWxsIGJlIGNvcGllZCB0byBjbGlwYm9hcmQ=";
  const importStringElem = document.querySelector(".import-string");
  if (importStringElem) {
    importStringElem.innerText = longString;
  }
  let currentIndex = 0;
  const slides = document.querySelectorAll('.rotator a');
  const indicatorsContainer = document.querySelector('.rotator-indicators');
  const slideTitleEl = document.querySelector('.slide-title');
  const slideTitles = ["Spotify", "Movie and TV Show Quiz", "All In One Moderation Tools", "Bluesky"];
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
  renderDynamicContents();
  var jumpToTop = document.querySelector('.jump-to-top');
  if (jumpToTop) {
    jumpToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
