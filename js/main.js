// Main JavaScript functionality for Si Thu Hlaing Portfolio
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initNavigation();
    initSmoothScrolling();
    initContactForm();
    initScrollEffects();
    initAnimations();
    
    console.log('Portfolio JavaScript loaded successfully!');
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger lines
            const lines = navToggle.querySelectorAll('.hamburger-line');
            lines.forEach(line => line.classList.toggle('active'));
        });
        
        // Close menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Active navigation highlighting
    highlightActiveNavigation();
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            const company = formData.get('company');
            const budget = formData.get('budget');
            const timeline = formData.get('timeline');
            
            // Create mailto link with all form data
            let mailtoBody = `Name: ${name}\n`;
            mailtoBody += `Email: ${email}\n`;
            if (company) mailtoBody += `Company: ${company}\n`;
            if (budget) mailtoBody += `Budget: ${budget}\n`;
            if (timeline) mailtoBody += `Timeline: ${timeline}\n`;
            mailtoBody += `\nMessage:\n${message}`;
            
            const mailtoLink = `mailto:lukephew@gmail.com?subject=${encodeURIComponent('Contact Form: ' + subject)}&body=${encodeURIComponent(mailtoBody)}`;
            
            // Small delay to show loading state
            setTimeout(() => {
                // Open email client
                window.location.href = mailtoLink;
                
                // Show success message
                if (statusDiv) {
                    statusDiv.innerHTML = '<div class="alert alert-success">Your email client should open now. Thank you for reaching out!</div>';
                }
                
                // Reset form and button
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Clear status message after 5 seconds
                setTimeout(() => {
                    if (statusDiv) statusDiv.innerHTML = '';
                }, 5000);
            }, 1000);
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-signup form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const mailtoLink = `mailto:lukephew@gmail.com?subject=Blog Subscription Request&body=Please add ${email} to your blog subscription list.`;
            window.location.href = mailtoLink;
            this.reset();
            alert('Thank you for subscribing! Your email client should open now.');
        });
    }
}

// Scroll effects
function initScrollEffects() {
    const header = document.querySelector('.site-header');
    
    // Header background change on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // Scroll to top functionality
    const scrollToTopBtn = createScrollToTopButton();
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
}

// Create scroll to top button
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    });
    
    document.body.appendChild(button);
    return button;
}

// Animation on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.timeline-item, .skill-category, .cert-card, .stat-card, .project-card, .experience-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Highlight active navigation
function highlightActiveNavigation() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        if (linkPath === currentLocation || 
            (currentLocation === '/' && linkPath === '/') ||
            (currentLocation.includes(linkPath) && linkPath !== '/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle external links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.hostname !== window.location.hostname) {
        e.target.setAttribute('target', '_blank');
        e.target.setAttribute('rel', 'noopener noreferrer');
    }
});

// Loading performance optimization
window.addEventListener('load', function() {
    // Remove any loading classes
    document.body.classList.remove('loading');
    
    // Initialize any heavy operations here
    console.log('Page fully loaded and ready!');
});

// Handle resize events
window.addEventListener('resize', debounce(function() {
    // Reset mobile menu on resize
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (window.innerWidth > 1024) {
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
    }
}, 250));

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.warn('Minor error handled:', e.message);
    // Don't break the user experience for minor errors
});

// Simple analytics tracking (if needed)
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track important interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary')) {
        trackEvent('User Interaction', 'Click', 'Primary Button');
    }
    
    if (e.target.matches('.social-link')) {
        trackEvent('User Interaction', 'Click', 'Social Link');
    }
    
    if (e.target.matches('a[href^="mailto:"]')) {
        trackEvent('Contact', 'Email', 'Email Link Click');
    }
    
    if (e.target.matches('a[href^="tel:"]')) {
        trackEvent('Contact', 'Phone', 'Phone Link Click');
    }
});

// Export functions for use in other scripts if needed
window.portfolioUtils = {
    trackEvent,
    debounce,
    highlightActiveNavigation
};