
document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation
    const reveals = document.querySelectorAll('.reveal');
    const handleReveal = () => {
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', handleReveal);
    handleReveal(); // initial trigger

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    const links = navLinks.querySelectorAll('a:not(.dropdown > a)');
    links.forEach(l => {
        l.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
