document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.classList.toggle('mobile-active');
    });

    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // 3. Form Submission Handling
    const bookingForm = document.getElementById('booking-form');
    
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple visual feedback
        const btn = bookingForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = "Processing...";
        btn.style.background = "#27ae60"; // Green for success
        
        setTimeout(() => {
            alert("Merci! Your reservation request has been sent. We will confirm via email shortly.");
            btn.innerText = originalText;
            btn.style.background = "";
            bookingForm.reset();
        }, 1500);
    });
});
