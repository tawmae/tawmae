const wordToEmojiMap = {
  "5Head": "/assets/emotes/5head.webp",
  "Pog": "/assets/emotes/pog.webp",
  "FeelsBadMan": "/assets/emotes/feelsbadman.webp",
  "Kapp": "/assets/emotes/kapp.webp",
  "pepeSmoke": "/assets/emotes/pepesmoke.webp",
  "MrDestructoid": "/assets/emotes/mrdestructoid.webp",
  "widetime": "/assets/emotes/widetime.webp",
  "modCheck": "/assets/emotes/modcheck.webp",
  "PauseChamp": "/assets/emotes/pausechamp.webp"
};

function replacePlaceholdersWithEmojis(text) {
  for (const [word, emojiURL] of Object.entries(wordToEmojiMap)) {
    const emojiTag = `<img src="${emojiURL}" alt="${word}" style="height: 1.5em; vertical-align: middle;">`;  // Adjusted height for better display

    // Handle both the plain word and the emoji syntax :word:
    text = text.replace(new RegExp(`:\\b${word}\\b:`, 'g'), emojiTag);  // Replaces :word: format
    text = text.replace(new RegExp(`\\b${word}\\b`, 'g'), emojiTag);     // Replaces word like 'Pog'
  }
  return text;
}



function replaceWordsWithEmojis() {
  const elements = document.querySelectorAll('p, h1, h2, h3, span, div, a');

  elements.forEach(element => {
    let text = element.innerHTML;

    // Replace words in the element's inner content (e.g., h1, p)
    for (const [word, emojiURL] of Object.entries(wordToEmojiMap)) {
      const emojiTag = `<img src="${emojiURL}" alt="${word}" style="height: 1.5em; vertical-align: middle;">`;  // Adjusted height for better display
      text = text.replace(new RegExp(`\\b${word}\\b`, 'g'), emojiTag);
    }

    // Replace words in the 'data-title' attribute if present
    if (element.hasAttribute('data-title')) {
      let dataTitle = element.getAttribute('data-title');
      dataTitle = replacePlaceholdersWithEmojis(dataTitle);
      element.setAttribute('data-title', dataTitle);
    }

    element.innerHTML = text;
  });
}



document.addEventListener("DOMContentLoaded", function() {
  replaceWordsWithEmojis();
});

var slides, indicators, currentIndex = 0;

function showSlide(i) {
  slides[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active");
  slides[i].classList.add("active");
  indicators[i].classList.add("active");

  const title = slides[i].getAttribute("data-title");
  document.querySelector(".slide-title").innerHTML = replacePlaceholdersWithEmojis(title);

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

function handleImageHover(event, isRotator = false) {
  const image = event.target;
  const originalSrc = image.src;

  image.dataset.originalSrc = originalSrc;
  image.src = originalSrc.replace('.png', '_2.png'); 

  image.classList.add('fade-in'); 

  if (isRotator) {
    image.addEventListener('mouseleave', () => {
      image.src = image.dataset.originalSrc; 
      image.classList.remove('fade-in'); 
    });
  } else {
    image.addEventListener('mouseleave', () => {
      image.src = image.dataset.originalSrc; 
      image.classList.remove('fade-in'); 
    });
  }
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

  const initialTitle = slides[0].getAttribute("data-title");
  document.querySelector(".slide-title").innerHTML = replacePlaceholdersWithEmojis(initialTitle);

  setInterval(nextSlide, 8000);

  const productCardImages = document.querySelectorAll('.product-card img');
  productCardImages.forEach(image => {
    image.addEventListener('mouseenter', (event) => handleImageHover(event));
  });

  const rotatorImages = document.querySelectorAll('.rotator img');
  rotatorImages.forEach(image => {
    image.addEventListener('mouseenter', (event) => handleImageHover(event, true));
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
