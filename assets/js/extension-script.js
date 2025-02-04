// ====================================================================================================================
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const icon = content.previousElementSibling.querySelector('.accordion-icon');

    if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.setAttribute("data-icon", "ic:baseline-keyboard-arrow-right");
    } else {
        content.style.display = 'block';
        icon.setAttribute("data-icon", "ic:baseline-keyboard-arrow-down");
    }
}

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
    } 
    else if (currentPage.includes("stream-receipt")) {
        loadImportString("/action-imports/stream-receipt.txt");  
    }
    else if (currentPage.includes("spotify-and-sb")) {
        loadImportString("/action-imports/spotify-and-sb.txt");  
    }
    else if (currentPage.includes("bluesky-and-sb")) {
        loadImportString("/action-imports/bluesky-and-sb.txt");  
    }
    else if (currentPage.includes("user-birthdays")) {
        loadImportString("/action-imports/user-birthdays.txt");  
    } 
});
