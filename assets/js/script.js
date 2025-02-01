// Neue Funktion, um 7TV Emotes dynamisch zu laden
async function load7TVEmotes() {
    const channel = "tawmae"; // Ersetze dies mit dem gewünschten Channelnamen
    const url = `https://api.7tv.app/v2/users/twitch/${channel}/emotes`; // API-Endpunkt von 7TV für Channel Emotes
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Füge die Emotes in den HTML-Code ein (z.B. in einen bestimmten Bereich)
        const emoteContainer = document.getElementById("emote-container"); // Container für die Emotes
        emoteContainer.innerHTML = ""; // Clear previous emotes if any
        data.forEach(emote => {
            const img = document.createElement("img");
            img.src = `https://cdn.7tv.app/emote/${emote.id}/3x`; // URL für das Emote in 3x Größe
            img.alt = emote.name;
            img.classList.add("seven-tv-emote");
            emoteContainer.appendChild(img);
        });
    } catch (error) {
        console.error("Fehler beim Laden der 7TV Emotes:", error);
    }
}

// Lade die Emotes beim Laden der Seite
document.addEventListener("DOMContentLoaded", function() {
    load7TVEmotes();
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

// Bildwechsel mit Fade für Rotator und Produktkarten
function handleImageHover(event, isRotator = false) {
  const image = event.target;
  const originalSrc = image.src;
  
  // Zweites Bild mit _2.png
  image.dataset.originalSrc = originalSrc; // Speichern des Originalbilds
  image.src = originalSrc.replace('.png', '_2.png'); // Bild wechseln

  image.classList.add('fade-in'); // Fade-Effekt hinzufügen

  // Beim Verlassen der Maus das Bild zurück wechseln
  if (isRotator) {
    image.addEventListener('mouseleave', () => {
      image.src = image.dataset.originalSrc; // Originalbild zurückladen
      image.classList.remove('fade-in'); // Fade-Effekt entfernen
    });
  } else {
    image.addEventListener('mouseleave', () => {
      image.src = image.dataset.originalSrc; // Originalbild zurückladen
      image.classList.remove('fade-in'); // Fade-Effekt entfernen
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Rotator-Slides und Indikatoren
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
