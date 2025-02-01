document.addEventListener("DOMContentLoaded", function() {
  console.log("Script loaded");
  // Set longString in Import-Section
  const longString = "VGhpcyBpcyBhIHZlcnkgbG9uZyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdGhhdCB3aWxsIGJlIGNvcGllZCB0byBjbGlwYm9hcmQ=";
  const importStringElem = document.querySelector(".import-string");
  if (importStringElem) {
    importStringElem.innerText = longString;
    console.log("Import string set:", longString);
  } else {
    console.error("Kein Element mit Klasse .import-string gefunden");
  }

  // Rotator Setup
  let currentIndex = 0;
  const slides = document.querySelectorAll('.rotator a');
  const indicatorsContainer = document.querySelector('.rotator-indicators');
  const slideTitleEl = document.querySelector('.slide-title');
  const slideTitles = ["Spotify", "Movie and TV Show Quiz", "All In One Moderation Tools", "Bluesky"];

  if (slides.length === 0) {
    console.error("Keine Slides im Rotator gefunden");
  }
  
  slides.forEach((slide, index) => {
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    indicator.addEventListener("click", function() { goToSlide(index); });
    indicatorsContainer.appendChild(indicator);
  });
  const indicators = document.querySelectorAll('.indicator');

  function updateSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
    slideTitleEl.classList.add("hidden");
    setTimeout(() => {
      slideTitleEl.textContent = slideTitles[currentIndex];
      slideTitleEl.classList.remove("hidden");
    }, 500);
  }
  window.nextSlide = function() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }
  window.prevSlide = function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  }
  window.goToSlide = function(index) {
    currentIndex = index;
    updateSlide();
  }
  updateSlide();
  setInterval(nextSlide, 8000);

  // Render dynamic contents
  renderDynamicContents();
});

function copyImportString(btn) {
  const longString = "VGhpcyBpcyBhIHZlcnkgbG9uZyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdGhhdCB3aWxsIGJlIGNvcGllZCB0byBjbGlwYm9hcmQ=";
  navigator.clipboard.writeText(longString);
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<span class="iconify" data-icon="fluent:checkmark-20-filled"></span> Copied';
  setTimeout(() => {
    btn.innerHTML = originalHTML;
  }, 2000);
}

function copyCode(btn) {
  const codeElem = btn.parentElement.querySelector("code");
  if (codeElem) {
    const codeText = codeElem.innerText;
    navigator.clipboard.writeText(codeText);
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span class="iconify" data-icon="fluent:checkmark-20-filled"></span> Copied';
    setTimeout(() => {
      btn.innerHTML = originalHTML;
    }, 2000);
  }
}

function renderDynamicContents() {
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
  const container = document.getElementById("dynamic-content");
  if (!container) {
    console.error("Kein Element mit ID 'dynamic-content' gefunden");
    return;
  }
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
      const copyBtn = document.createElement("button");
      copyBtn.className = "copy-code-button";
      copyBtn.innerHTML = '<span class="iconify" data-icon="material-symbols:content-copy-outline"></span>';
      copyBtn.onclick = function() { copyDynamicContent(item.content, copyBtn); };
      codeBlock.appendChild(copyBtn);
      section.appendChild(codeBlock);
    } else if (item.type === "import") {
      const importBlock = document.createElement("div");
      importBlock.className = "import-container";
      const span = document.createElement("span");
      span.className = "import-string";
      span.innerText = item.content;
      importBlock.appendChild(span);
      const copyBtn = document.createElement("button");
      copyBtn.className = "copy-import-button";
      copyBtn.innerHTML = '<span class="iconify" data-icon="material-symbols:content-copy-outline"></span> Kopieren';
      copyBtn.onclick = function() { copyDynamicContent(item.content, copyBtn); };
      importBlock.appendChild(copyBtn);
      section.appendChild(importBlock);
    }
    container.appendChild(section);
  });
}

function copyDynamicContent(content, btn) {
  navigator.clipboard.writeText(content);
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<span class="iconify" data-icon="fluent:checkmark-20-filled"></span> Copied';
  setTimeout(() => {
    btn.innerHTML = originalHTML;
  }, 2000);
}
