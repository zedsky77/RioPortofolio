// Slide the portfolio gallery
const slider = document.querySelector('.slider');
let slideWidth = slider.clientWidth;
let scrollPosition = 0;

function autoSlide() {
    scrollPosition += slideWidth;
    if (scrollPosition >= slider.scrollWidth) {
        scrollPosition = 0;
    }

    slider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}

setInterval(autoSlide, 100000); // Change the interval time as needed (in milliseconds)


