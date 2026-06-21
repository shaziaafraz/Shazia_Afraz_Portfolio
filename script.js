// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});



// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) rotate(1deg)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Certificate modal
const certModal = document.getElementById('certificate-modal');
if (certModal) {
    const openModal = (btn) => {
        if (!btn) return;

        const name = btn.getAttribute('data-certificate-name') || 'Certificate Name';
        const org = btn.getAttribute('data-certificate-org') || 'IBM via Coursera';
        const grade = btn.getAttribute('data-certificate-grade') || '99.50%';
        const category = btn.getAttribute('data-certificate-category') || 'Placeholder Category';
        const description = btn.getAttribute('data-certificate-description') || 'Full description placeholder.';
        const skills = btn.getAttribute('data-certificate-skills') || 'Placeholder skill 1, Placeholder skill 2';
        const verifyUrl = btn.getAttribute('data-certificate-verify-url') || '';

        document.getElementById('certificate-modal-title').textContent = name;
        document.getElementById('certificate-modal-org').textContent = org;
        document.getElementById('certificate-modal-grade').textContent = grade;
        document.getElementById('certificate-modal-category').textContent = category;
        document.getElementById('certificate-modal-description').textContent = description;
        document.getElementById('certificate-modal-skills').textContent = skills;

        const verifyBtn = document.getElementById('certificate-modal-verify');
        if (verifyBtn) {
            if (verifyUrl) {
                verifyBtn.disabled = false;
                verifyBtn.style.opacity = '1';
                verifyBtn.onclick = () => {
                    window.open(verifyUrl, '_blank', 'noopener,noreferrer');
                };
            } else {
                verifyBtn.disabled = true;
                verifyBtn.style.opacity = '0.6';
                verifyBtn.onclick = null;
            }
        }


        certModal.classList.add('is-open');
        certModal.setAttribute('aria-hidden', 'false');
        certModal.dataset.opened = 'true';
    };

    const closeModal = () => {
        certModal.classList.remove('is-open');
        certModal.setAttribute('aria-hidden', 'true');
        certModal.dataset.opened = 'false';
    };

    document.querySelectorAll('.details-btn[data-certificate-name]').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn));
    });

    // Also open when user clicks anywhere on the certificate card
    document.querySelectorAll('.certificate-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // avoid double-open when clicking button itself
            if (e.target && e.target.classList && e.target.classList.contains('details-btn')) return;
            const btn = card.querySelector('.details-btn[data-certificate-name]');
            openModal(btn);
        });
    });

    certModal.addEventListener('click', (e) => {
        if (e.target && e.target.getAttribute && e.target.getAttribute('data-modal-close') === 'true') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && certModal.classList.contains('is-open')) {
            closeModal();
        }
    });
}

// Parallax effect removed for normal section flow


// Typing effect for hero subtitle (optional enhancement)
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    // Uncomment the line below to enable typing effect
    // setTimeout(typeWriter, 1000);
}

// Add fade-in animation to hero elements on load
document.addEventListener('DOMContentLoaded', () => {
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');

    if (heroLeft) {
        heroLeft.style.opacity = '0';
        heroLeft.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroLeft.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            heroLeft.style.opacity = '1';
            heroLeft.style.transform = 'translateY(0)';
        }, 200);
    }

    if (heroRight) {
        heroRight.style.opacity = '0';
        heroRight.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroRight.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            heroRight.style.opacity = '1';
            heroRight.style.transform = 'translateY(0)';
        }, 400);
    }
});
