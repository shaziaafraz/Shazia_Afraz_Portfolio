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
        // Close mobile menu after navigating
        const mobileNav = document.getElementById('mobileNavLinks');
        const hamburger = document.getElementById('hamburger');
        if (mobileNav && mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburger');
const mobileNavLinks = document.getElementById('mobileNavLinks');
if (hamburgerBtn && mobileNavLinks) {
    hamburgerBtn.addEventListener('click', () => {
        const isOpen = mobileNavLinks.classList.toggle('open');
        hamburgerBtn.classList.toggle('open', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    });
}

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
    const navLinks = document.querySelectorAll('.nav-links a, .nav-links-mobile a');

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

/* ============================================================
   CERTIFICATIONS SECTION
   ============================================================ */

const certificatesData = [
    {
        id: 1,
        name: "Python for Data Science, AI & Development",
        grade: 99.50,
        skills: ["Python"],
        overview: "Covers Python fundamentals including data structures, programming logic, working with APIs, and Python libraries such as Pandas and NumPy for data science work.",
        verifyUrl: "https://coursera.org/share/22258aaf42f307608c0c608dfcce1c32"
    },
    {
        id: 2,
        name: "Databases and SQL for Data Science with Python",
        grade: 93.50,
        skills: ["Python", "SQL"],
        overview: "Covers relational database concepts, writing SQL queries, and using Python to connect to and analyze data stored in SQL databases.",
        verifyUrl: "https://coursera.org/share/2cf3ee70e211c56675cf781a575d45aa"
    },
    {
        id: 3,
        name: "Data Analysis with Python",
        grade: 97.50,
        skills: ["Python", "Data Analytics"],
        overview: "Covers importing and cleaning data, exploratory data analysis, and building simple predictive models using Python's data analysis libraries.",
        verifyUrl: "https://coursera.org/share/402e3fb0815b3b2e4bff3b929f2b67fc"
    },
    {
        id: 4,
        name: "Machine Learning with Python",
        grade: 97.85,
        skills: ["Python", "Machine Learning"],
        overview: "Covers core machine learning algorithms including regression, classification, clustering, and recommender systems, implemented in Python.",
        verifyUrl: "https://coursera.org/share/6077d519d7c97891a86d9da2c50496dd"
    },
    {
        id: 5,
        name: "Applied Data Science Capstone",
        grade: 88.33,
        skills: ["Python", "Data Analytics", "Machine Learning"],
        overview: "A hands-on capstone project applying data collection, wrangling, exploratory analysis, and machine learning to solve a real-world data science problem end-to-end.",
        verifyUrl: "https://coursera.org/share/cd6c208b963262a3b937b5416d5fa8ce"
    },
    {
        id: 6,
        name: "Generative AI: Elevate Your Data Science Career",
        grade: 93.00,
        skills: ["Generative AI"],
        overview: "Covers how generative AI tools and large language models can be applied to enhance data science workflows, from coding assistance to data exploration.",
        verifyUrl: "https://coursera.org/share/70edf5b78acae5e2c5e87c844c293e68"
    },
    {
        id: 7,
        name: "Data Scientist Career Guide and Interview Preparation",
        grade: 91.70,
        skills: ["Career Development"],
        overview: "Covers building a data science portfolio, resume and interview preparation, and strategies for navigating the data science job search.",
        verifyUrl: "https://coursera.org/share/6ab67d29de2a13975fe4fbb83e488edf"
    }
];

function getGradeTier(grade) {
    if (grade >= 95) return 'gold';
    if (grade >= 90) return 'silver';
    return 'bronze';
}

function getVisibleCardCount() {
    const width = window.innerWidth;
    if (width <= 768) return 1;
    if (width <= 1024) return 2;
    return 3;
}

let certState = {
    filtered: [...certificatesData],
    page: 0
};

function buildCertCard(cert) {
    const tier = getGradeTier(cert.grade);
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.dataset.certId = cert.id;
    card.innerHTML = `
        <div class="cert-card-badges">
            <span class="cert-badge-icon" title="IBM">🏢</span>
            <span class="cert-badge-icon" title="Coursera">🎓</span>
        </div>
        <div class="cert-card-icon">📜</div>
        <div class="cert-card-name">${cert.name}</div>
        <div class="cert-card-tags">
            <span class="cert-grade-badge ${tier}">${cert.grade.toFixed(2)}%</span>
            <span class="cert-completed-badge">✓ Completed</span>
        </div>
        <button class="btn-view-details">View Details</button>
    `;
    card.addEventListener('click', () => openCertModal(cert));
    return card;
}

function renderCertCarousel() {
    const carousel = document.getElementById('certCarousel');
    const emptyState = document.getElementById('certEmptyState');
    const dotsWrap = document.getElementById('certDots');
    if (!carousel) return;

    carousel.innerHTML = '';

    if (certState.filtered.length === 0) {
        emptyState.style.display = 'block';
        dotsWrap.innerHTML = '';
        updateCertNavButtons(0, 0);
        return;
    }
    emptyState.style.display = 'none';

    certState.filtered.forEach(cert => {
        carousel.appendChild(buildCertCard(cert));
    });

    const perPage = getVisibleCardCount();
    const totalPages = Math.max(1, Math.ceil(certState.filtered.length / perPage));
    if (certState.page >= totalPages) certState.page = totalPages - 1;
    if (certState.page < 0) certState.page = 0;

    renderCertDots(totalPages);
    scrollCarouselToPage();
    updateCertNavButtons(certState.page, totalPages);
}

function renderCertDots(totalPages) {
    const dotsWrap = document.getElementById('certDots');
    dotsWrap.innerHTML = '';
    if (totalPages <= 1) return;
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.className = 'cert-dot' + (i === certState.page ? ' active' : '');
        dot.addEventListener('click', () => {
            certState.page = i;
            scrollCarouselToPage();
            renderCertDots(totalPages);
            updateCertNavButtons(certState.page, totalPages);
        });
        dotsWrap.appendChild(dot);
    }
}

function scrollCarouselToPage() {
    const carousel = document.getElementById('certCarousel');
    if (!carousel || !carousel.firstChild) return;
    const perPage = getVisibleCardCount();
    const card = carousel.querySelector('.cert-card');
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 28; // matches 1.75rem gap
    const scrollAmount = certState.page * perPage * (cardWidth + gap);
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

function updateCertNavButtons(page, totalPages) {
    const prevBtn = document.getElementById('certPrev');
    const nextBtn = document.getElementById('certNext');
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = page <= 0;
    nextBtn.disabled = page >= totalPages - 1;
}

function applyCertFiltersAndSearch() {
    const searchTerm = document.getElementById('certSearchInput').value.trim().toLowerCase();
    const activeFilterBtn = document.querySelector('.cert-filter-btn.active');
    const activeFilter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'All';

    certState.filtered = certificatesData.filter(cert => {
        const matchesSearch = cert.name.toLowerCase().includes(searchTerm);
        const matchesFilter = activeFilter === 'All' || cert.skills.includes(activeFilter);
        return matchesSearch && matchesFilter;
    });
    certState.page = 0;
    renderCertCarousel();
}

function openCertModal(cert) {
    const tier = getGradeTier(cert.grade);
    document.getElementById('certModalName').textContent = cert.name;
    document.getElementById('certModalIssuer').textContent = 'IBM via Coursera';
    const gradeEl = document.getElementById('certModalGrade');
    gradeEl.textContent = `Grade: ${cert.grade.toFixed(2)}%`;
    gradeEl.className = 'cert-modal-grade';
    document.getElementById('certModalOverview').textContent = cert.overview;

    const skillsWrap = document.getElementById('certModalSkills');
    skillsWrap.innerHTML = '';
    cert.skills.forEach(skill => {
        const span = document.createElement('span');
        span.textContent = skill;
        skillsWrap.appendChild(span);
    });

    document.getElementById('certModalVerifyBtn').href = cert.verifyUrl;
    document.getElementById('certModalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    document.getElementById('certModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    // Stats
    const grades = certificatesData.map(c => c.grade);
    const total = certificatesData.length;
    const highest = Math.max(...grades);
    const average = grades.reduce((a, b) => a + b, 0) / total;

    const statTotal = document.getElementById('statTotal');
    const statHighest = document.getElementById('statHighest');
    const statAverage = document.getElementById('statAverage');
    const statIBM = document.getElementById('statIBM');
    if (statTotal) statTotal.textContent = total;
    if (statHighest) statHighest.textContent = highest.toFixed(2) + '%';
    if (statAverage) statAverage.textContent = average.toFixed(2) + '%';
    if (statIBM) statIBM.textContent = total;

    // Initial render
    renderCertCarousel();

    // Search
    const searchInput = document.getElementById('certSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', applyCertFiltersAndSearch);
    }

    // Filters
    document.querySelectorAll('.cert-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cert-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyCertFiltersAndSearch();
        });
    });

    // Carousel nav
    const prevBtn = document.getElementById('certPrev');
    const nextBtn = document.getElementById('certNext');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (certState.page > 0) {
                certState.page--;
                scrollCarouselToPage();
                const perPage = getVisibleCardCount();
                const totalPages = Math.max(1, Math.ceil(certState.filtered.length / perPage));
                renderCertDots(totalPages);
                updateCertNavButtons(certState.page, totalPages);
            }
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const perPage = getVisibleCardCount();
            const totalPages = Math.max(1, Math.ceil(certState.filtered.length / perPage));
            if (certState.page < totalPages - 1) {
                certState.page++;
                scrollCarouselToPage();
                renderCertDots(totalPages);
                updateCertNavButtons(certState.page, totalPages);
            }
        });
    }

    // Modal close handlers
    const modalOverlay = document.getElementById('certModalOverlay');
    const modalCloseBtn = document.getElementById('certModalClose');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCertModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeCertModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCertModal();
    });

    // Re-layout carousel on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            certState.page = 0;
            renderCertCarousel();
        }, 200);
    });
});
