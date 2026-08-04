document.addEventListener('DOMContentLoaded', () => {

    // ── Header scroll state
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // ── Mobile menu toggle
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            toggle.textContent = '☰';
        });
    });

    // ── Scroll reveal
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                const siblings = e.target.parentElement.querySelectorAll('.reveal');
                siblings.forEach((el, idx) => {
                    if (el === e.target) {
                        e.target.style.transitionDelay = `${idx * 0.1}s`;
                    }
                });
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    revealElements.forEach(el => observer.observe(el));

    // ── Testimonial rotator
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsWrap = document.getElementById('testimonial-dots');
    if (testimonials.length && dotsWrap) {
        let current = 0;

        testimonials.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.setAttribute('aria-label', `Show testimonial ${i + 1}`);
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showTestimonial(i));
            dotsWrap.appendChild(dot);
        });
        const dots = dotsWrap.querySelectorAll('button');

        function showTestimonial(index) {
            testimonials[current].classList.remove('active');
            dots[current].classList.remove('active');
            current = index;
            testimonials[current].classList.add('active');
            dots[current].classList.add('active');
        }

        setInterval(() => {
            showTestimonial((current + 1) % testimonials.length);
        }, 6000);
    }

    // ── Form submit
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = bookingForm.querySelector('button[type="submit"]');
        const originalText = btn.innerText;

        btn.innerText = 'Processing...';
        btn.style.background = '#5a7a5a';
        btn.style.borderColor = '#5a7a5a';

        setTimeout(() => {
            alert('Merci! Your reservation request has been sent. We will confirm via email shortly.');
            btn.innerText = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
            bookingForm.reset();
        }, 1200);
    });
});
