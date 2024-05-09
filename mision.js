// mision.js

document.addEventListener("DOMContentLoaded", function() {
    let slider = document.querySelector(".pyslider");
    let images = slider.querySelectorAll("img");
    let currentIndex = 0;
    
    setInterval(function() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = "block";
    }, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    let slider = document.querySelector(".py2slider");
    let images = slider.querySelectorAll("img");
    let currentIndex = 0;
    
    setInterval(function() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = "block";
    }, 5000);
});