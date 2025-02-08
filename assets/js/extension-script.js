function toggleAccordion(id) {
    const content = document.getElementById(id);
    if (!content) return;

    const header = content.previousElementSibling;
    if (!header || !header.classList.contains('accordion-header')) return;

    const icon = header.querySelector('.accordion-icon');
    if (!icon) return;

    const isOpen = content.style.display === 'block';

    document.querySelectorAll('.accordion-content').forEach(acc => acc.style.display = 'none');
    document.querySelectorAll('.accordion-icon').forEach(ic => ic.setAttribute("data-icon", "ic:baseline-keyboard-arrow-right"));

    if (!isOpen) {
        content.style.display = 'block';
        icon.setAttribute("data-icon", "ic:baseline-keyboard-arrow-down");

        const baseId = id.replace('-acc', '');
        history.pushState(null, null, `#${baseId}`);

        setTimeout(() => {
            const offset = 150;
            const elementPosition = header.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }, 100);
    } else {
        history.pushState(null, null, window.location.pathname);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const accId = `${hash}-acc`;
        toggleAccordion(accId);

        setTimeout(() => {
            const header = document.getElementById(accId)?.previousElementSibling;
            if (header) {
                const offset = 300;
                const elementPosition = header.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
            }
        }, 200);
    }
});


// ====================================================================================================================
function copyToClipboard(id) {
    const copyText = document.getElementById(id);
    const button = copyText.nextElementSibling;

    navigator.clipboard.writeText(copyText.getAttribute("data-copy-text")).then(() => {
        button.innerHTML = '<span class="iconify" data-icon="fluent:checkmark-20-filled"></span> Copied';
        button.classList.add('copied');

        setTimeout(() => {
            button.innerHTML = '<span class="iconify" data-icon="material-symbols:content-copy-outline-sharp"></span> Copy';
            button.classList.remove('copied');
        }, 2500);
    });
}

// ====================================================================================================================

function copyURLToClipboard(url) {

    const button = document.querySelector('#import .copy-btn');
    navigator.clipboard.writeText(url).then(() => {
        button.innerHTML = '<span class="iconify" data-icon="fluent:checkmark-20-filled"></span> Copied';
        button.classList.add('copied');
        setTimeout(() => {
            button.innerHTML = '<span class="iconify" data-icon="material-symbols:content-copy-outline-sharp"></span> Copy';
            button.classList.remove('copied');
        }, 2500);
    });
}

// ====================================================================================================================
function loadImportString(file) {
    const importText = document.getElementById("import-string");
    fetch(file)
        .then(response => response.text())
        .then(data => {
            importText.textContent = data.substring(0, 200) + '...';
            importText.setAttribute("data-copy-text", data);
        })
        .catch(err => console.error("Error loading file:", err));
}

// ====================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;

    if (currentPage.includes("dynamic-timers")) {
        loadImportString("/action-imports/dynamic-timers.txt");
    } else if (currentPage.includes("rotator")) {
        loadImportString("/action-imports/rotator.txt");
    } else if (currentPage.includes("stream-receipt")) {
        loadImportString("/action-imports/stream-receipt.txt");
    } else if (currentPage.includes("spotify-and-sb")) {
        loadImportString("/action-imports/spotify-and-sb.txt");
    } else if (currentPage.includes("bluesky-and-sb")) {
        loadImportString("/action-imports/bluesky-and-sb.txt");
    } else if (currentPage.includes("user-birthdays")) {
        loadImportString("/action-imports/user-birthdays.txt");
    } else if (currentPage.includes("movie-and-tv-show-quiz")) {
        loadImportString("/action-imports/movie-and-tv-show-quiz.txt");
    } else if (currentPage.includes("temporary-vip")) {
        loadImportString("/action-imports/temporary-vip.txt");
    } else if (currentPage.includes("channel-point-auction")) {
        loadImportString("/action-imports/channel-point-auction.txt");
    } else if (currentPage.includes("command-checker")) {
        loadImportString("/action-imports/command-checker.txt");
    } else if (currentPage.includes("hugs")) {
        loadImportString("/action-imports/hugs.txt");
    } else if (currentPage.includes("live-trigger")) {
        loadImportString("/action-imports/live-trigger.txt");
    } else if (currentPage.includes("lurks")) {
        loadImportString("/action-imports/lurks.txt");
    } else if (currentPage.includes("mod-tools")) {
        loadImportString("/action-imports/mod-tools.txt");
    } else if (currentPage.includes("raffle")) {
        loadImportString("/action-imports/raffle.txt");
    } else if (currentPage.includes("random-source-position")) {
        loadImportString("/action-imports/random-source-position.txt");
    } else if (currentPage.includes("reward-discount")) {
        loadImportString("/action-imports/reward-discount.txt");
    } else if (currentPage.includes("time-trigger")) {
        loadImportString("/action-imports/time-trigger.txt");
    } else if (currentPage.includes("tts-queue")) {
        loadImportString("/action-imports/tts-queue.txt");
    } else if (currentPage.includes("user-inventory")) {
        loadImportString("/action-imports/user-inventory.txt");
    } else if (currentPage.includes("hot-potato")) {
        loadImportString("/action-imports/hot-potato.txt");
    } else if (currentPage.includes("quick-maths")) {
        loadImportString("/action-imports/quick-maths.txt");
    } else if (currentPage.includes("stardew-valley")) {
        loadImportString("/action-imports/stardew-valley.txt");
    }

});

