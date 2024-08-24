document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
});



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Optional: Show the button when the user scrolls down
window.addEventListener('scroll', () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) { // Adjust the threshold as needed
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const imageParts = document.querySelectorAll('.image-part');
    let index = 0;

    function animatePart() {
        if (index < imageParts.length) {
            imageParts[index].classList.add('animate');
            index++;
            setTimeout(animatePart, 300);
        } else {
            setTimeout(() => {
                imageParts.forEach(part => part.classList.remove('animate'));
                index = 0;
                setTimeout(animatePart, 1000);
            }, 1000);
        }
    }

    animatePart();
});