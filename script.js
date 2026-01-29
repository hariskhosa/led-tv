document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- Cinematic Scroll Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Elements to animate
    document.querySelectorAll('.product-card, .feature-card, .section-title, .offer-banner, .testimonial-card, .showroom-item, .faq-item').forEach(el => {
        el.classList.add('scroll-hidden');
        observer.observe(el);
    });

    // --- FAQ Accordion ---
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Close others
            document.querySelectorAll('.faq-item').forEach(other => other.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // --- Hero Typing Effect ---
    const textElement = document.querySelector('.hero h2');
    if (textElement) {
        const textToType = "Sab Se Kam Price, 100% Original Guarantee!";
        textElement.innerText = "";
        let i = 0;

        function typeWriter() {
            if (i < textToType.length) {
                textElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 50); // Speed of typing
            }
        }

        // Start typing after a slight delay
        setTimeout(typeWriter, 500);
    }
});
