// Smooth scrolling for navigation links
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

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Create mailto link
  const mailtoLink = `mailto:lukephew@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

  // Open default email client
  window.location.href = mailtoLink;

  // Show confirmation and reset form
  alert('Your email client should open now. Thank you for reaching out!');
  this.reset();
});

// Add scroll effect to navigation
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
  }
});

// Add animation on scroll
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

// Observe timeline items and cards for animation
document.querySelectorAll('.timeline-item, .skill-category, .cert-card, .stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Mobile menu toggle (if needed)
const navToggle = document.createElement('button');
navToggle.innerHTML = '☰';
navToggle.style.display = 'none';
navToggle.style.background = 'none';
navToggle.style.border = 'none';
navToggle.style.fontSize = '1.5rem';
navToggle.style.cursor = 'pointer';
navToggle.style.color = '#764ba2';

// Add mobile menu functionality
if (window.innerWidth <= 768) {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');

  nav.appendChild(navToggle);
  navToggle.style.display = 'block';

  navToggle.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'white';
      navLinks.style.padding = '1rem';
      navLinks.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
  });
}

// Update mobile menu on resize
window.addEventListener('resize', () => {
  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth > 768) {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'row';
    navLinks.style.position = 'static';
    navLinks.style.background = 'none';
    navLinks.style.padding = '0';
    navLinks.style.boxShadow = 'none';
    navToggle.style.display = 'none';
  } else {
    navToggle.style.display = 'block';
    navLinks.style.display = 'none';
  }
});