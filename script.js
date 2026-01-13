// Scroll Reveal Animation
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);

// Simple Form Feedback
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    btn.innerText = "Booking Confirmed!";
    btn.style.background = "#28a745";
    alert("Thank you! Your table is reserved.");
});

// Run reveal on load
reveal();
