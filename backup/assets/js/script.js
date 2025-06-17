// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
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

// Button click handlers with placeholder functionality
document.addEventListener('DOMContentLoaded', function() {
    // Button 1 - Get Started
    const btn1 = document.getElementById('btn-1');
    if (btn1) {
        btn1.addEventListener('click', function() {
            // Add your custom functionality here
            alert('Get Started button clicked! Add your custom functionality here.');
            console.log('Button 1 (Get Started) was clicked');
        });
    }

    // Button 2 - Learn More
    const btn2 = document.getElementById('btn-2');
    if (btn2) {
        btn2.addEventListener('click', function() {
            // Add your custom functionality here
            alert('Learn More button clicked! Add your custom functionality here.');
            console.log('Button 2 (Learn More) was clicked');
        });
    }

    // Button 3 - Join Community
    const btn3 = document.getElementById('btn-3');
    if (btn3) {
        btn3.addEventListener('click', function() {
            // Add your custom functionality here
            alert('Join Community button clicked! Add your custom functionality here.');
            console.log('Button 3 (Join Community) was clicked');
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(248, 250, 252, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(248, 250, 252, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .gallery-item, .document-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Social media link handlers (placeholder)
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const icon = this.querySelector('i');
        let platform = 'Social Media';
        
        if (icon.classList.contains('fa-twitter')) platform = 'Twitter';
        else if (icon.classList.contains('fa-discord')) platform = 'Discord';
        else if (icon.classList.contains('fa-telegram')) platform = 'Telegram';
        else if (icon.classList.contains('fa-github')) platform = 'GitHub';
        
        alert(`${platform} link clicked! Add your actual social media URLs here.`);
        console.log(`${platform} social link was clicked`);
    });
});

// Form validation and handling (if forms are added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Utility function for future API calls
async function makeAPICall(url, options = {}) {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = hero.querySelector('.floating-image');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });
    }
});

// Console welcome message
console.log(`
    ╔═══════════════════════════════════════╗
    ║         Welcome to PercyVerance!      ║
    ║                                       ║
    ║   Thank you for visiting our site.    ║
    ║   This is where innovation begins!    ║
    ╚═══════════════════════════════════════╝
`);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${this.src}`);
            this.style.display = 'none';
        });
    });
});
