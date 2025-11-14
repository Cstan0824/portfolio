// Basic interactivity: menu toggle, year injection and form handling
document.addEventListener('DOMContentLoaded', function () {
    // Inject year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // Menu toggle for small screens
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    // Contact form fake submit
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = form.elements['name'].value.trim();
            const email = form.elements['email'].value.trim();
            if (!name || !email) {
                alert('Please provide your name and email.');
                return;
            }
            alert('Thanks, ' + name + '! This demo form doesn\'t send messages.');
            form.reset();
        });
    }

    // Scroll buttons for horizontal project track
    const track = document.querySelector('[data-track]');
    const buttons = document.querySelectorAll('.scroll-btn');
    buttons.forEach(btn => btn.addEventListener('click', () => {
        if (!track) return;
        const dir = btn.dataset.scroll === 'next' ? 1 : -1;
        track.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }));

    // Intersection observer for animations
    const animated = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    animated.forEach(el => observer.observe(el));

    // Shrink header on scroll
    const header = document.querySelector('[data-sticky]');
    if (header) {
        window.addEventListener('scroll', () => {
            header.toggleAttribute('data-shrink', window.scrollY > 60);
        });
    }
});
