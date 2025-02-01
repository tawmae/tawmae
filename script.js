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
});
function copyImportString() {
  navigator.clipboard.writeText(longString);
  alert("String kopiert!");
}
