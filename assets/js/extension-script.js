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

            importText.textContent = data.substring(0, 100) + '...';
            importText.setAttribute("data-copy-text", data);
        })
        .catch(err => {
        });
}


document.addEventListener("DOMContentLoaded", function () {
    loadImportString("/action-imports/dynamic-timers.txt");
});
// ====================================================================================================================
