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

$(document).ready(function(){
  $('.carousel-1').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    speed: 1000,
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev" aria-label="Previous">&#10094;</button>',
    nextArrow: '<button type="button" class="slick-next" aria-label="Next">&#10095;</button>'
  });
});

// ====================================================================================================================

document.addEventListener("DOMContentLoaded", function() {
    tippy('.discord-link', {
        content: 'Need help with something?',
        placement: 'bottom',
        animation: 'scale-subtle',
        theme: 'light-border',
        delay: [100, 50], 
    });

    tippy('.bluesky-link', {
        content: 'Follow me on Bluesky (or not)',
        placement: 'bottom',
        animation: 'scale-subtle',
        theme: 'light-border',
        delay: [100, 50], 
    });

    tippy('.twitch-link', {
        content: 'I don\'t stream KEKW',
        placement: 'bottom',
        animation: 'scale-subtle',
        theme: 'light-border',
        delay: [100, 50], 
    });

    tippy('.youtube-link', {
        content: 'My YouTube channel (german only)',
        placement: 'bottom',
        animation: 'scale-subtle',
        theme: 'light-border',
        delay: [100, 50], 
    });

    tippy('.kofi-button', {
        content: 'Buy me an Iced Pumpkin Spice Latte',
        placement: 'bottom',
        animation: 'scale-subtle',
        theme: 'light-border',
        delay: [100, 50], 
    });

    tippy('.carousel-tooltip', {
        placement: 'bottom-end',
        animation: 'scale-subtle',
        theme: 'light-border',
        delay: [100, 50], 
    });

    tippy('.product-card', {
        placement: 'bottom-end',
        animation: 'scale-subtle',
        theme: 'light-border',
        delay: [100, 50], 
    });
});


