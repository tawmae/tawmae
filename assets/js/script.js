document.addEventListener("DOMContentLoaded", function() {
  slides = document.querySelectorAll(".rotator a");
  indicators = document.createElement("div");
  document.querySelector(".rotator-indicators").appendChild(indicators);
  indicators.remove();
  indicators = [];

  slides.forEach(function(_, i) {
    var d = document.createElement("div");
    d.className = "indicator";
    d.addEventListener("click", function() {
      showSlide(i);
    });
    document.querySelector(".rotator-indicators").appendChild(d);
    indicators.push(d);
  });

  slides[0].classList.add("active");
  indicators[0].classList.add("active");


  setInterval(nextSlide, 8000);  
});
