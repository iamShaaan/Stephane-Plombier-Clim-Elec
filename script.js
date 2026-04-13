// Smooth Scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Reveal Effect
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .about-content, .testimonial-card').forEach(el => {
    el.classList.add('has-reveal');
    observer.observe(el);
});

// Form Submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.disabled = true;
        btn.innerText = 'Envoi en cours...';

        // Simulate submission or connect to n8n if approved
        setTimeout(() => {
            alert('Merci ! Stéphane vous contactera bientôt.');
            contactForm.reset();
            btn.disabled = false;
            btn.innerText = originalText;
        }, 1500);
    });
}
