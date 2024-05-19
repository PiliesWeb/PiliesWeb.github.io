document.addEventListener('DOMContentLoaded', () => {
    const sliderContainers = document.querySelectorAll('.slider-container');

    sliderContainers.forEach((container, index) => {
        const slides = container.querySelectorAll('.slide');
        let currentIndex = 0;

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            const offset = -currentIndex * 100;
            container.querySelector('.slider').style.transform = `translateX(${offset}%)`;
        }

        setInterval(showNextSlide, 3000);
    });
});
