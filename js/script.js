// ============================================
// Language Switcher
// ============================================
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.init();
    }

    init() {
        this.setLanguage(this.currentLang);
        this.attachEventListeners();
    }

    attachEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setLanguage(e.target.dataset.lang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update all translatable elements
        document.querySelectorAll('[data-en]').forEach(element => {
            const text = element.dataset[lang];
            if (text) {
                element.textContent = text;
            }
        });

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Set HTML direction for Arabic
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }
}

// ============================================
// Page Navigation with Smooth Transitions
// ============================================
class PageNavigator {
    constructor() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Handle internal navigation links
        document.querySelectorAll('a[href$=".html"]').forEach(link => {
            link.addEventListener('click', (e) => {
                // Don't prevent default for external links, just let them navigate normally
                // The fade-in animation is handled by CSS on page load
            });
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
    new PageNavigator();
});

// ============================================
// Galaxy Background Animation
// ============================================
class GalaxyBackground {
    constructor() {
        this.canvas = document.getElementById('galaxyCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        
        this.resizeCanvas();
        this.initParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resizeCanvas());
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    initParticles() {
        this.particles = [];
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 10000);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 1.5,
                opacity: Math.random() * 0.5 + 0.3,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                color: this.getRandomStarColor(),
                twinkleSpeed: Math.random() * 0.02 + 0.01
            });
        }
    }
    
    getRandomStarColor() {
        const colors = [
            'rgba(255, 255, 255, ',    // White
            'rgba(167, 139, 250, ',    // Purple
            'rgba(167, 243, 208, ',    // Cyan/Green
            'rgba(243, 232, 255, ',    // Light purple
            'rgba(165, 180, 252, '     // Light blue
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }
    
    updateParticles() {
        for (let particle of this.particles) {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around screen
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.y > this.canvas.height) particle.y = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            
            // Gravity towards mouse (subtle effect)
            const dx = this.mouseX - particle.x;
            const dy = this.mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
                const force = (200 - distance) / 200;
                particle.vx += dx / distance * force * 0.05;
                particle.vy += dy / distance * force * 0.05;
            }
            
            // Apply damping
            particle.vx *= 0.99;
            particle.vy *= 0.99;
            
            // Limit speed
            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            if (speed > 2) {
                particle.vx = (particle.vx / speed) * 2;
                particle.vy = (particle.vy / speed) * 2;
            }
            
            // Twinkling effect
            particle.opacity += (Math.random() - 0.5) * particle.twinkleSpeed;
            particle.opacity = Math.max(0.1, Math.min(0.8, particle.opacity));
        }
    }
    
    draw() {
        // Create gradient background
        const gradient = this.ctx.createRadialGradient(
            this.canvas.width / 2, this.canvas.height / 2, 0,
            this.canvas.width / 2, this.canvas.height / 2, 
            Math.max(this.canvas.width, this.canvas.height) * 0.8
        );
        
        gradient.addColorStop(0, 'rgba(30, 41, 59, 0.9)');
        gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.95)');
        gradient.addColorStop(1, 'rgba(5, 8, 20, 1)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw galaxy effect
        this.drawGalaxy();
        
        // Draw particles (stars)
        for (let particle of this.particles) {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color + particle.opacity + ')';
            this.ctx.fill();
            
            // Add glow effect
            this.ctx.strokeStyle = particle.color + particle.opacity * 0.5 + ')';
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
        }
    }
    
    drawGalaxy() {
        // Draw nebula clouds
        const nebulaDensity = 3;
        for (let i = 0; i < nebulaDensity; i++) {
            const x = (Math.sin(Date.now() * 0.00001 + i) * 0.5 + 0.5) * this.canvas.width;
            const y = (Math.cos(Date.now() * 0.00015 + i) * 0.5 + 0.5) * this.canvas.height;
            
            const nebula = this.ctx.createRadialGradient(x, y, 0, x, y, 300);
            nebula.addColorStop(0, 'rgba(124, 58, 237, 0.03)');
            nebula.addColorStop(0.5, 'rgba(6, 182, 212, 0.02)');
            nebula.addColorStop(1, 'rgba(30, 41, 59, 0)');
            
            this.ctx.fillStyle = nebula;
            this.ctx.fillRect(x - 300, y - 300, 600, 600);
        }
    }
    
    animate() {
        this.updateParticles();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize galaxy background when page loads
document.addEventListener('DOMContentLoaded', () => {
    new GalaxyBackground();
});

// ============================================
// Smooth scrolling for navigation links
// ============================================
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

// ============================================
// Add scroll animation effect
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and portfolio items
document.querySelectorAll('.service-card, .reason-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// Mobile menu toggle
// ============================================
function handleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        navMenu.style.display = navMenu.style.display === 'none' ? 'flex' : 'none';
    }
}

// Handle responsive navigation
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.nav-menu').style.display = 'flex';
    }
});
