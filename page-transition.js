// Smooth page transitions with fade effect
document.addEventListener('DOMContentLoaded', () => {
  // Fade in when page loads
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 50);

  // Handle link clicks for smooth transitions
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Don't navigate if it's the current page
      if (window.location.pathname.includes(href) || 
          (href === 'index.html' && window.location.pathname.endsWith('/'))) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      
      // Fade out and navigate
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.submit-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent! ✨';
    btn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      contactForm.reset();
    }, 2000);
  });
}
