const longString = "VGhpcyBpcyBhIHZlcnkgbG9uZyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdGhhdCB3aWxsIGJlIGNvcGllZCB0byBjbGlwYm9hcmQ=";

function showNotification(message) {
  const notif = document.createElement("div");
  notif.className = "copy-notification";
  notif.innerText = message;
  document.body.appendChild(notif);
  setTimeout(() => {
    notif.style.opacity = 0;
    setTimeout(() => {
      notif.remove();
    }, 500);
  }, 1500);
}

function copyImportString() {
  navigator.clipboard.writeText(longString);
  showNotification("Copied import to clipboard");
}

function copyCode(elem) {
  const codeText = elem.parentElement.querySelector("code").innerText;
  navigator.clipboard.writeText(codeText);
  showNotification("Copied code to clipboard");
}

const dynamicContents = [
  {
    type: "code",
    title: "Beispiel JavaScript Code",
    language: "javascript",
    content: "console.log('Hello, dynamic world!');"
  },
  {
    type: "import",
    title: "Beispiel Import",
    content: "import myModule from 'my-module';"
  },
  {
    type: "code",
    title: "Beispiel Python Code",
    language: "python",
    content: "print('Hello, Python World!')"
  }
];

function renderDynamicContents() {
  const container = document.getElementById("dynamic-content");
  dynamicContents.forEach(item => {
    const section = document.createElement("div");
    section.className = "dynamic-item";
    const heading = document.createElement("h3");
    heading.innerText = item.title;
    section.appendChild(heading);
    if (item.type === "code") {
      const codeBlock = document.createElement("div");
      codeBlock.className = "code-block";
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.className = "language-" + item.language;
      code.innerText = item.content;
      pre.appendChild(code);
      codeBlock.appendChild(pre);
      const copyIcon = document.createElement("span");
      copyIcon.className = "copy-code iconify";
      copyIcon.setAttribute("data-icon", "material-symbols:content-copy-outline");
      copyIcon.onclick = function() { copyDynamicContent(item.content, "Copied code to clipboard"); };
      codeBlock.appendChild(copyIcon);
      section.appendChild(codeBlock);
    } else if (item.type === "import") {
      const importBlock = document.createElement("div");
      importBlock.className = "import-container";
      const span = document.createElement("span");
      span.className = "import-string";
      span.innerText = item.content;
      importBlock.appendChild(span);
      const button = document.createElement("button");
      button.onclick = function() { copyDynamicContent(item.content, "Copied import to clipboard"); };
      const icon = document.createElement("span");
      icon.className = "iconify";
      icon.setAttribute("data-icon", "material-symbols:content-copy-outline");
      button.appendChild(icon);
      button.insertAdjacentText("beforeend", " Kopieren");
      importBlock.appendChild(button);
      section.appendChild(importBlock);
    }
    container.appendChild(section);
  });
}

function copyDynamicContent(content, message) {
  navigator.clipboard.writeText(content);
  showNotification(message);
}

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.style.background = window.scrollY > 50 ? "#1a1920" : "#1e1d22";
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".import-string").innerText = longString;
  renderDynamicContents();

  let currentIndex = 0;
  const slides = document.querySelectorAll('.rotator a');
  const indicatorsContainer = document.querySelector('.rotator-indicators');
  const slideTitleEl = document.querySelector('.slide-title');
  const slideTitles = ["Spotify", "Movie and TV Show Quiz", "All In One Moderation Tools", "Bluesky"];
  
  slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });
  const indicators = document.querySelectorAll('.indicator');
  
  function updateSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
      indicators[index].classList.toggle('active', index === currentIndex);
    });
    slideTitleEl.classList.add('hidden');
    setTimeout(() => {
      slideTitleEl.textContent = slideTitles[currentIndex];
      slideTitleEl.classList.remove('hidden');
    }, 500);
  }
  window.nextSlide = function() { currentIndex = (currentIndex + 1) % slides.length; updateSlide(); }
  window.prevSlide = function() { currentIndex = (currentIndex - 1 + slides.length) % slides.length; updateSlide(); }
  window.goToSlide = function(index) { currentIndex = index; updateSlide(); }
  
  updateSlide();
  setInterval(() => { nextSlide(); }, 8000);
});
