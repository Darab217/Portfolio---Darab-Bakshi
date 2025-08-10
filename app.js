// Portfolio data
const portfolioData = {
    weddings: [
        {"title": "Wedding Moment 1", "url": "https://www.instagram.com/reel/DGfKzXdpy9Q/?igsh=bGN4cTJzaGxwZGdv"},
        {"title": "Wedding Moment 2", "url": "https://www.instagram.com/reel/DII53LzJ7-k/?igsh=MWV1ZG11MGliMHVoNw%3D%3D"},
        {"title": "Wedding Moment 3", "url": "https://www.instagram.com/reel/DHQKjQGJHOU/?igsh=MTV4bG1mNmhhYmN3dg%3D%3D"},
        {"title": "Wedding Story 1", "url": "https://www.instagram.com/p/DHDMBVSJDOD/"},
        {"title": "Wedding Story 2", "url": "https://www.instagram.com/reel/DHYwZkCJ9QR/?igsh=em5uN3NjYmI3d2Y2"},
        {"title": "Wedding Memory 1", "url": "https://www.instagram.com/p/DFj706PJ2q0/"},
        {"title": "Wedding Memory 2", "url": "https://www.instagram.com/reel/DFKwkt-yy5-/"}
    ],
    vlcc: [
        {"title": "VLCC Campaign 1", "url": "https://www.instagram.com/p/DLO9f_kzG-m/"},
        {"title": "VLCC Campaign 2", "url": "https://www.instagram.com/p/DLzV5hrpxgM/"},
        {"title": "VLCC Content 1", "url": "https://www.instagram.com/p/DKNHhTAz7zH/"},
        {"title": "VLCC Content 2", "url": "https://www.instagram.com/p/DMZ2GSMTwyJ/"},
        {"title": "VLCC Project", "url": "https://www.instagram.com/p/DKbuvhAzkjg/"}
    ],
    kindlife: [
        {"title": "Kindlife Video 1", "url": "https://www.instagram.com/reel/DLh32JES0iq/"},
        {"title": "Kindlife Video 2", "url": "https://www.instagram.com/p/DILeRzMIuvI/"},
        {"title": "Kindlife Video 3", "url": "https://www.instagram.com/reel/DMh4yT3yDDe/"},
        {"title": "Kindlife Video 4", "url": "https://www.instagram.com/reel/DMc9TN7yewp/"},
        {"title": "Kindlife Video 5", "url": "https://www.instagram.com/reel/DMZrJo3SmFb/"},
        {"title": "Kindlife Video 6", "url": "https://www.instagram.com/reel/DLRSr2GIgUZ/"},
        {"title": "Kindlife Video 7", "url": "https://www.instagram.com/reel/DME4QiTyFP8/"},
        {"title": "Kindlife Video 8", "url": "https://www.instagram.com/reel/DL4uLzrSStN/"},
        {"title": "Kindlife Video 9", "url": "https://www.instagram.com/reel/DJhZH9CIcR2/"},
        {"title": "Kindlife Video 10", "url": "https://www.instagram.com/p/DKCtLOPySwM/"},
        {"title": "Kindlife Video 11", "url": "https://www.instagram.com/p/DIs0BHvyryf/"}
    ],
    fashion: [
        {"title": "Fashion Week BTS 1", "url": "https://www.instagram.com/p/DBTqYsrvhXh/?img_index=1"},
        {"title": "Fashion Week BTS 2", "url": "https://www.instagram.com/reel/C2ALc5xPGoo/"},
        {"title": "India Art Fair", "url": "https://www.instagram.com/reel/DG2b2FhJZdD/?igsh=MXRmYTE3czc2bGpzcg%3D%3D"},
        {"title": "Manish Malhotra", "url": "https://www.instagram.com/reel/DG42BA0tjEX/?igsh=NnQ1ZnJlNGdxcXE4"},
        {"title": "Tarun Tahiliani", "url": "https://www.instagram.com/reel/DGuXnjIyZel/?igsh=MWVseDk3d3prMmp6Mw%3D%3D"},
        {"title": "Lakme Fashion Week 1", "url": "https://www.instagram.com/reel/DA-gSBCuY3l/?igsh=d2tid3Zwdm5oOGh0"},
        {"title": "Lakme Fashion Week 2", "url": "https://www.instagram.com/p/DH5GUN-I_e3/"},
        {"title": "Lakme Fashion Week 3", "url": "https://www.instagram.com/reel/DBGn7JppKtt/?igsh=MWFuMDZnaWZmMTY2dA%3D%3D"},
        {"title": "Lakme Fashion Week 4", "url": "https://www.instagram.com/reel/DBFDZEVRL2i/?igsh=NnA0N2pzam9zOXR3"},
        {"title": "Lakme Fashion Week 5", "url": "https://www.instagram.com/p/DA-yx_fyNZ8/"},
        {"title": "Lakme Fashion Week 6", "url": "https://www.instagram.com/p/DA-n9SUCKjJ/"}
    ],
    personal: [
        {"title": "Personal Project 1", "url": "https://www.instagram.com/reel/CoFaeLVjYcV/"},
        {"title": "Personal Project 2", "url": "https://www.instagram.com/p/C_8EPGEPYMl/"},
        {"title": "Personal Project 3", "url": "https://www.instagram.com/reel/CkBde7_jK9F/"},
        {"title": "Personal Project 4", "url": "https://www.instagram.com/p/DBlV0xlyMZd/"},
        {"title": "Personal Project 5", "url": "https://www.instagram.com/p/CkDpJWnoNZM/"}
    ],
    other: [
        {"title": "Explorer's Club", "url": "https://www.instagram.com/reel/DEuF2ULSPuU/?igsh=bDVyNzRjcmZqbnRh"},
        {"title": "Kindlife Kosmos", "url": "https://www.instagram.com/reel/DDWPlP4ozb0/?igsh=NDVwY2JiemMxZDlq"},
        {"title": "Gaurav Gupta - SHUFFLED", "url": "https://www.youtube.com/watch?v=yCGj9TcGtps"},
        {"title": "BeBeautiful Series", "url": "https://www.youtube.com/watch?v=juVn-NTJL08"}
    ]
};

// Wait for DOM to be ready
function ready(callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenu && mobileMenuBtn) {
        mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('hidden') ? '' : 'hidden';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenu && mobileMenuBtn) {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Smooth scrolling function
function scrollToSection(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 70;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        return true;
    }
    return false;
}

// Navigation event handler
function handleNavigation(event) {
    event.preventDefault();
    
    const targetId = event.target.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
        const scrolled = scrollToSection(targetId);
        if (scrolled) {
            closeMobileMenu();
            updateActiveNav(targetId.substring(1));
        }
    }
}

// Update active navigation
function updateActiveNav(activeSection) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
}

// Scroll spy function
function handleScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 120;
    let currentSection = 'home';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    updateActiveNav(currentSection);
}

// Portfolio Functions
function getCategoryName(category) {
    const names = {
        'weddings': 'Weddings',
        'vlcc': 'VLCC',
        'kindlife': 'Kindlife',
        'fashion': 'Fashion Events',
        'personal': 'Personal Projects',
        'other': 'Other Work'
    };
    return names[category] || category;
}

function getCategoryIcon(category) {
    const icons = {
        'weddings': '💍',
        'vlcc': '💄',
        'kindlife': '🌿',
        'fashion': '👗',
        'personal': '🎬',
        'other': '✨'
    };
    return icons[category] || '📹';
}

function createPortfolioItem(item, category) {
    const isYoutube = item.url.includes('youtube.com');
    
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio-item';
    portfolioItem.setAttribute('data-category', category);
    
    portfolioItem.innerHTML = `
        <div class="portfolio-item-image">
            ${getCategoryIcon(category)}
        </div>
        <div class="portfolio-item-content">
            <h3>${item.title}</h3>
            <p class="portfolio-item-category">${getCategoryName(category)}</p>
            <a href="${item.url}" target="_blank" class="portfolio-item-link" rel="noopener noreferrer">
                View on ${isYoutube ? 'YouTube' : 'Instagram'} →
            </a>
        </div>
    `;
    
    // Add click handler to the entire card
    portfolioItem.addEventListener('click', function(e) {
        // Don't interfere with link clicks
        if (e.target.tagName === 'A') {
            return;
        }
        // Open link in new tab when clicking anywhere on the card
        window.open(item.url, '_blank', 'noopener,noreferrer');
    });
    
    return portfolioItem;
}

function renderPortfolio(filterCategory = 'all') {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    Object.keys(portfolioData).forEach(category => {
        if (filterCategory === 'all' || filterCategory === category) {
            portfolioData[category].forEach(item => {
                const portfolioItem = createPortfolioItem(item, category);
                portfolioGrid.appendChild(portfolioItem);
            });
        }
    });
}

function handleFilterClick(event) {
    const category = event.target.getAttribute('data-category');
    
    // Update active filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Render filtered portfolio
    renderPortfolio(category);
}

// Contact Form Functions
function showFormMessage(message, type = 'success') {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    // Remove existing message
    const existingMessage = contactForm.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    // Insert at beginning of form
    contactForm.insertBefore(messageDiv, contactForm.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageDiv && messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

function validateForm(formData) {
    const errors = [];
    
    const name = formData.get('name');
    if (!name || !name.trim()) {
        errors.push('Name is required');
    }
    
    const email = formData.get('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !email.trim()) {
        errors.push('Email is required');
    } else if (!emailRegex.test(email.trim())) {
        errors.push('Please enter a valid email address');
    }
    
    const message = formData.get('message');
    if (!message || !message.trim()) {
        errors.push('Message is required');
    }
    
    return errors;
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const contactForm = document.getElementById('contact-form');
    const formData = new FormData(contactForm);
    const errors = validateForm(formData);
    
    if (errors.length > 0) {
        showFormMessage(errors.join('. '), 'error');
        return;
    }
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        showFormMessage('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 2000);
}

// Initialize all event listeners
function initializeEventListeners() {
    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });
    }
    
    // Navigation links - both desktop and mobile
    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    allNavLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', handleNavigation);
    });
    
    // Portfolio filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Scroll spy
    let scrollTimer = null;
    window.addEventListener('scroll', function() {
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(handleScrollSpy, 10);
    });
    
    // Close mobile menu on outside click
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
    }
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

// Main initialization function
function initialize() {
    // Initialize portfolio
    renderPortfolio();
    
    // Initialize scroll spy
    handleScrollSpy();
    
    // Initialize event listeners
    initializeEventListeners();
    
    console.log('Portfolio website initialized successfully');
}

// Start the application when DOM is ready
ready(initialize);