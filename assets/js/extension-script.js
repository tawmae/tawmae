function toggleAccordion(id) {
  const content = document.getElementById(id);
  const icon = content.previousElementSibling.querySelector('.iconify');
  if (content.style.display === 'block') {
    content.style.display = 'none';
    icon.setAttribute("data-icon", "ic:baseline-keyboard-arrow-right");
  } else {
    content.style.display = 'block';
    icon.setAttribute("data-icon", "ic:baseline-keyboard-arrow-down");
  }
}

function copyToClipboard() {
  const copyText = document.getElementById("base64-string");
  const button = copyText.nextElementSibling;
  
  // Kopiere den Text in die Zwischenablage
  navigator.clipboard.writeText(copyText.getAttribute("data-copy-text")).then(() => {
    // Ändere den Button-Text und das Symbol
    button.innerHTML = '<span class="iconify" data-icon="fluent:checkmark-20-filled"></span> Copied';
    button.classList.add('copied');
    
    // Setze den Button nach 2,5 Sekunden zurück
    setTimeout(() => {
      button.innerHTML = '<span class="iconify" data-icon="material-symbols:content-copy-outline-sharp"></span> Copy';
      button.classList.remove('copied');
    }, 2500);
  });
}

