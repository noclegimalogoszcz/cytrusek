document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon between menu and x
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        });
    });

    // 3. Form submission prevent default for demo purposes
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Dziękujemy za zapytanie! Skontaktujemy się z Tobą najszybciej jak to możliwe. (Wersja Demo)');
            contactForm.reset();
        });
    }
});
