const longString = "VGhpcyBpcyBhIHZlcnkgbG9uZyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdGhhdCB3aWxsIGJlIGNvcGllZCB0byBjbGlwYm9hcmQ=";
function zeigeNachricht() {
  document.getElementById("nachricht").innerText = "Hallo von JavaScript!";
}
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "#1a1920";
  } else {
    header.style.background = "#1e1d22";
  }
});
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".import-string").innerText = longString.substring(0, 30) + "...";
  function updateTime() {
    const now = new Date();
    document.getElementById("current-time").innerText = "Aktuelle Zeit: " + now.toLocaleTimeString();
  }
  updateTime();
  setInterval(updateTime, 1000);
});
function copyImportString() {
  navigator.clipboard.writeText(longString);
  const notif = document.createElement("div");
  notif.className = "copy-notification";
  notif.innerText = "Copied import to clipboard";
  document.body.appendChild(notif);
  setTimeout(() => {
    notif.style.opacity = 0;
    setTimeout(() => {
      notif.remove();
    }, 500);
  }, 1500);
}
function copyCode(elem) {
  const codeBlock = elem.previousElementSibling;
  if (codeBlock && codeBlock.querySelector("code")) {
    const codeText = codeBlock.querySelector("code").innerText;
    navigator.clipboard.writeText(codeText);
    const notif = document.createElement("div");
    notif.className = "copy-notification";
    notif.innerText = "Copied code to clipboard";
    document.body.appendChild(notif);
    setTimeout(() => {
      notif.style.opacity = 0;
      setTimeout(() => {
        notif.remove();
      }, 500);
    }, 1500);
  }
}
