const longString = "VGhpcyBpcyBhIHZlcnkgbG9uZyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdGhhdCB3aWxsIGJlIGNvcGllZCB0byBjbGlwYm9hcmQ=";
function zeigeNachricht() {}
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.style.background = window.scrollY > 50 ? "#1a1920" : "#1e1d22";
});
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".import-string").innerText = longString;
  function updateTime() {
    const now = new Date();
    const timeElem = document.getElementById("current-time");
    if(timeElem) {
      timeElem.innerText = "Aktuelle Zeit: " + now.toLocaleTimeString();
    }
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
  const preElem = elem.parentElement;
  if (preElem && preElem.querySelector("code")) {
    const codeText = preElem.querySelector("code").innerText;
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
