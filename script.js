
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

        // Repairs dropdown toggle on mobile
        const dropdownTrigger = document.querySelector('.dropdown-trigger') || document.querySelector('.dropdown > a');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        if (dropdownTrigger && dropdownMenu) {
            dropdownTrigger.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdownMenu.classList.toggle('active');
                    dropdownTrigger.classList.toggle('active');
                    
                    // Rotate chevron icon
                    const chevron = dropdownTrigger.querySelector('.fa-chevron-down') || dropdownTrigger.querySelector('.fa-angle-down');
                    if (chevron) {
                        chevron.style.transform = dropdownMenu.classList.contains('active') ? 'rotate(180deg)' : 'none';
                        chevron.style.transition = 'transform 0.3s ease';
                    }
                }
            });
        }
});
