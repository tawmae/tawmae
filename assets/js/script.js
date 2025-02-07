// ====================================================================================================================
const wordToEmojiMap = {
    "5Head": "/assets/emotes/5head.webp",
    "Pog": "/assets/emotes/pog.webp",
    "FeelsBadMan": "/assets/emotes/feelsbadman.webp",
    "Kapp": "/assets/emotes/kapp.webp",
    "pepeSmoke": "/assets/emotes/pepesmoke.webp",
    "MrDestructoid": "/assets/emotes/mrdestructoid.webp",
    "widetime": "/assets/emotes/widetime.webp",
    "modCheck": "/assets/emotes/modcheck.webp",
    "PauseChamp": "/assets/emotes/pausechamp.webp",
    "Clap": "/assets/emotes/clap.webp",
    "itsTimeToStop": "/assets/emotes/joji-clock.webp",
    "rupertRotate": "/assets/emotes/rupert.webp",
    "kingGABEN": "/assets/emotes/kingGABEN.webp",
    "thisIsFine": "/assets/emotes/this-is-fine.webp",
    "SNIFFA": "/assets/emotes/sniffa.webp",
    "moneyWave": "/assets/emotes/moneyWave.webp",
    "griffinTyping": "/assets/emotes/peter-griffin-typing.webp",
    "catJAM": "/assets/emotes/cat-jam.webp",
    "_EDM": "/assets/emotes/edm.webp",
    "crunch": "/assets/emotes/crunch.webp",
    "happie": "/assets/emotes/happie.webp",
    "CLASSIC": "/assets/emotes/classic.webp",
    "helloThere": "/assets/emotes/hellothere.webp",
    "streamer_BOT": "/assets/emotes/streamerbot.webp",
    "LUL": "/assets/emotes/lul.webp",
    "catBirthday": "/assets/emotes/cat-birthday.webp",
    "rightThere": "/assets/emotes/right-there.webp",
    "PETTHEVIP": "/assets/emotes/pet-the-vip.webp",
    "catBlush": "/assets/emotes/cat-blush.webp"
};

function replacePlaceholdersWithEmojis(text) {
    for (const [word, emojiURL] of Object.entries(wordToEmojiMap)) {
        const emojiTag = `<img src="${emojiURL}" alt="${word}" class="emoji" data-fullsize="${emojiURL}" style="height: 1em; vertical-align: middle;">`;

        text = text.replace(new RegExp(`:\\b${word}\\b:`, 'g'), emojiTag);
        text = text.replace(new RegExp(`\\b${word}\\b`, 'g'), emojiTag);
    }
    return text;
}

function replaceWordsWithEmojis() {
    const elements = document.querySelectorAll('p, h1, h2, h3, span, div');

    elements.forEach(element => {
        let text = element.innerHTML;

        for (const [word, emojiURL] of Object.entries(wordToEmojiMap)) {
            const emojiTag = `<img src="${emojiURL}" alt="${word}" class="emoji" data-fullsize="${emojiURL}" style="height: 1em; vertical-align: middle;">`;
            text = text.replace(new RegExp(`\\b${word}\\b`, 'g'), emojiTag);
        }

        element.innerHTML = text;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    replaceWordsWithEmojis();
});

document.addEventListener("DOMContentLoaded", function () {
    const emojis = document.querySelectorAll('.emoji');

    emojis.forEach(emoji => {
        emoji.addEventListener('mouseenter', function () {
            const fullsizePreview = document.createElement('div');
            fullsizePreview.classList.add('emoji-preview');
            fullsizePreview.style.position = 'absolute';
            fullsizePreview.style.zIndex = '1000';
            fullsizePreview.style.top = `${emoji.getBoundingClientRect().top + window.scrollY}px`;
            fullsizePreview.style.left = `${emoji.getBoundingClientRect().right + 10}px`;
            fullsizePreview.innerHTML = `<img src="${emoji.getAttribute('data-fullsize')}" style="max-width: 200px; max-height: 200px;">`;

            document.body.appendChild(fullsizePreview);

            emoji.addEventListener('mouseleave', function () {
                fullsizePreview.remove();
            });
        });
    });
});

// ====================================================================================================================

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
    image.src = originalSrc.replace('.webp', '_2.webp');

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

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        slides = document.querySelectorAll(".rotator a");
        indicators = document.createElement("div");
        document.querySelector(".rotator-indicators").appendChild(indicators);
        indicators.remove();
        indicators = [];

        slides.forEach(function (_, i) {
            var d = document.createElement("div");
            d.className = "indicator";
            d.addEventListener("click", function () {
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
            image.addEventListener('mouseenter', (event) => handleImageHover(event, true));
        });

        const titleImages = document.querySelectorAll('.home-title-image img');
        titleImages.forEach(image => {
            image.addEventListener('mouseenter', (event) => handleImageHover(event));
        });
    }

    const dropdownToggle = document.querySelector(".dropdown-toggle");
    dropdownToggle.addEventListener("click", function (event) {
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

// ====================================================================================================================

document.addEventListener("DOMContentLoaded", function () {
    var codeBlocks = document.querySelectorAll('.extension-code-block');

    codeBlocks.forEach(function (block) {
        var language = block.getAttribute('data-language') || 'none';
        var pre = document.createElement('pre');
        var code = document.createElement('code');
        code.className = 'language-' + language;

        var codeText = block.innerHTML.trim();
        code.textContent = codeText;
        pre.appendChild(code);
        block.parentNode.replaceChild(pre, block);

        if (typeof Prism !== 'undefined') {
            Prism.highlightElement(code);
        }
    });
});


// ====================================================================================================================

document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/state/state.txt")
        .then(response => response.text())
        .then(status => {
            status = status.trim();
            
            const tooltip = document.createElement("div");
            tooltip.classList.add("status-tooltip");

            const statusText = document.createElement("span");
            statusText.style.fontWeight = "bold";
            statusText.style.marginLeft = "5px"; 
            statusText.textContent = status === "true" ? "online ●" : "offline ●";
            statusText.style.color = status === "true" ? "lightgreen" : "red";
            statusText.style.textShadow = `0px 0px 5px ${status === "true" ? "lightgreen" : "red"}`;

            tooltip.textContent = "tawmae is ";
            tooltip.appendChild(statusText);

            document.body.appendChild(tooltip);
            
            const discordIcon = document.querySelector('.header-right a[href*="discord.com"]');

            if (discordIcon) {
                discordIcon.addEventListener("mouseenter", function (event) {
                    tooltip.style.display = "block";
                    tooltip.style.left = `${event.target.getBoundingClientRect().left}px`;
                    tooltip.style.top = `${event.target.getBoundingClientRect().bottom + 15}px`;
                });

                discordIcon.addEventListener("mouseleave", function () {
                    tooltip.style.display = "none";
                });
            }
        })
        .catch(error => {
            console.error("Error loading status:", error);
        });
});

// ====================================================================================================================




// ====================================================================================================================


