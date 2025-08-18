// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll Reveal Animations
const sections = document.querySelectorAll(".fade-in, .slide-in");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Testimonial Carousel
let testimonials = document.querySelectorAll(".testimonials blockquote");
let index = 0;
function showTestimonial() {
  testimonials.forEach((t,i)=>t.classList.toggle("active", i===index));
  index = (index+1)%testimonials.length;
}
setInterval(showTestimonial,4000);
