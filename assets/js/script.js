var slides, indicators, currentIndex=0;
function showSlide(i){slides[currentIndex].classList.remove("active");indicators[currentIndex].classList.remove("active");slides[i].classList.add("active");indicators[i].classList.add("active");currentIndex=i;}
function nextSlide(){var i=(currentIndex+1)%slides.length;showSlide(i);}
function prevSlide(){var i=(currentIndex-1+slides.length)%slides.length;showSlide(i);}
document.addEventListener("DOMContentLoaded",function(){
slides=document.querySelectorAll(".rotator a");
indicators=document.createElement("div");
document.querySelector(".rotator-indicators").appendChild(indicators);
indicators.remove();
indicators=[];
slides.forEach(function(_,i){
var d=document.createElement("div");
d.className="indicator";
d.addEventListener("click",function(){showSlide(i);});
document.querySelector(".rotator-indicators").appendChild(d);
indicators.push(d);
});
slides[0].classList.add("active");
indicators[0].classList.add("active");
});
