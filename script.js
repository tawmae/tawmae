function zeigeNachricht() {
    document.getElementById("nachricht").innerText = "Hallo von JavaScript!";
}

/* Navigation beim Scrollen anpassen */
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#1a1920";
    } else {
        header.style.background = "#1e1d22";
    }
});
