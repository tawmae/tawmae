
const wordToEmojiMap = {
  "5Head": "https://cdn.7tv.app/emote/01F6NPFQXG000AAS5FM9Q6GVCC/2x.avif",
  "Pog": "https://cdn.7tv.app/emote/01F6NPRJXG000AAS5FM9Q6GVCC/2x.avif",
  "FeelsBadMan": "https://cdn.7tv.app/emote/01F6NPSQXG000AAS5FM9Q6GVCC/2x.avif",
  "Kappa": "https://cdn.7tv.app/emote/01F6NPKQXG000AAS5FM9Q6GVCC/2x.avif",
  "pepeSmoke": "https://cdn.7tv.app/emote/01GXSBRHEG0005KVP89EZ27DXH/2x.avif",

};


function replaceWordsWithEmojis() {

  const elements = document.querySelectorAll('p, h1, h2, h3, span, div');

  elements.forEach(element => {
    let text = element.innerHTML;

    for (const [word, emojiURL] of Object.entries(wordToEmojiMap)) {
      const emojiTag = `<img src="${emojiURL}" alt="${word}" style="height: 1em; vertical-align: middle;">`;
      text = text.replace(new RegExp(`\\b${word}\\b`, 'g'), emojiTag); 
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

  setInterval(nextSlide, 8000);


  const productCardImages = document.querySelectorAll('.product-card img');
  productCardImages.forEach(image => {
    image.addEventListener('mouseenter', (event) => handleImageHover(event));
  });


  const rotatorImages = document.querySelectorAll('.rotator img');
  rotatorImages.forEach(image => {
    image.addEventListener('mouseenter', (event) => handleImageHover(event, true)); // true für Rotator
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
