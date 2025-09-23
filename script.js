// DOM Elements
const loadingOverlay = document.getElementById('loadingOverlay');
const notifyForm = document.getElementById('notifyForm');
const emailInput = document.getElementById('emailInput');
const successMessage = document.getElementById('successMessage');

// Countdown Elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Page Loading
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
        initializeAnimations();
    }, 2000);
});

// Initialize Animations
function initializeAnimations() {
    // Add scroll animations
    const animatedElements = document.querySelectorAll('.countdown-section, .features-section, .contact-section, .social-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(element);
    });
}

// Countdown Timer
function updateCountdown() {
    // Set launch date (30 days from now - you can change this)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    launchDate.setHours(12, 0, 0, 0); // Set to noon
    
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    if (distance < 0) {
        // Countdown finished
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update countdown values directly without animation
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

function updateCountdownValues(element, newValue) {
    // Simple text update without rotation animation
    if (element.textContent !== newValue) {
        element.textContent = newValue;
        // Add a subtle scale effect instead of rotation
        element.style.transform = 'scale(1.05)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 200);
    }
}

// Start countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Email Notification Form
notifyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address');
        return;
    }
    
    // Simulate form submission
    const submitBtn = document.getElementById('notifyBtn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Reset form
        emailInput.value = '';
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        successMessage.classList.add('show');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
        
        // Store email in localStorage (in real app, send to server)
        storeEmailSubscription(email);
        
    }, 2000);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(message) {
    // Create and show error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    errorDiv.style.cssText = `
        margin-top: 15px;
        padding: 12px 20px;
        background: rgba(239, 68, 68, 0.2);
        border: 1px solid #ef4444;
        border-radius: 8px;
        color: #ef4444;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        animation: slideDown 0.3s ease-out;
    `;
    
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    notifyForm.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 4000);
}

function storeEmailSubscription(email) {
    let subscriptions = JSON.parse(localStorage.getItem('emailSubscriptions') || '[]');
    if (!subscriptions.includes(email)) {
        subscriptions.push(email);
        localStorage.setItem('emailSubscriptions', JSON.stringify(subscriptions));
    }
    
    console.log('Email subscriptions:', subscriptions);
}

// Social Media Interactions
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.dataset.platform;
        
        // Add ripple effect
        createRippleEffect(e, link);
        
        // In a real application, you would redirect to actual social media pages
        setTimeout(() => {
            switch(platform) {
                case 'github':
                    console.log('Opening GitHub profile...');
                    // window.open('https://github.com/yourusername', '_blank');
                    break;
                case 'linkedin':
                    console.log('Opening LinkedIn profile...');
                    // window.open('https://linkedin.com/in/yourprofile', '_blank');
                    break;
                case 'twitter':
                    console.log('Opening Twitter profile...');
                    // window.open('https://twitter.com/yourusername', '_blank');
                    break;
                case 'instagram':
                    console.log('Opening Instagram profile...');
                    // window.open('https://instagram.com/yourusername', '_blank');
                    break;
            }
        }, 300);
    });
});

function createRippleEffect(event, element) {
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;
    
    const rect = element.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    
    const rippleCSS = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = rippleCSS;
        document.head.appendChild(style);
    }
    
    const existingRipple = element.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    element.appendChild(circle);
    
    setTimeout(() => {
        circle.remove();
    }, 600);
}

// Contact Information Interactions
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', () => {
        item.style.transform = 'translateX(15px) scale(1.02)';
        setTimeout(() => {
            item.style.transform = 'translateX(10px)';
        }, 150);
    });
});

// Feature Cards Hover Effects
document.querySelectorAll('.feature-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-10px) scale(1)';
    });
});

// Logo Click Animation
document.getElementById('logo').addEventListener('click', () => {
    const logo = document.getElementById('logo');
    logo.style.animation = 'none';
    setTimeout(() => {
        logo.style.animation = 'glow 3s ease-in-out infinite alternate, bounce 0.6s ease-out';
        setTimeout(() => {
            logo.style.animation = 'glow 3s ease-in-out infinite alternate';
        }, 600);
    }, 10);
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement === emailInput) {
        notifyForm.dispatchEvent(new Event('submit'));
    }
});

// Performance Optimization
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

// Optimize scroll animations
const optimizedScrollHandler = debounce(() => {
    // Handle scroll-based animations
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('in-view');
        }
    });
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Vortex Infinite - Coming Soon Page Loaded');
    
    // Add any initialization code here
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Console Easter Egg
console.log(`
%c╦  ╦┌─┐┬─┐┌┬┐┌─┐─┐ ┬  ╦┌┐┌┌─┐┬┌┐┌┬┌┬┐┌─┐
%c╚╗╔╝│ │├┬┘ │ ├┤ ┌┴┬┘  ║│││├┤ │││││ │ ├┤ 
%c ╚╝ └─┘┴└─ ┴ └─┘┴ └─  ╩┘└┘└  ┴┘└┘┴ ┴ └─┘

%cWelcome to the developer console! 
We're building something amazing. Stay tuned!

%cInterested in joining our team? 
Contact us: devs.vortexinfinite@gmail.com
`, 
'color: #6366f1; font-weight: bold; font-size: 12px;',
'color: #8b5cf6; font-weight: bold; font-size: 12px;', 
'color: #06b6d4; font-weight: bold; font-size: 12px;',
'color: #e2e8f0; font-size: 14px;',
'color: #94a3b8; font-size: 12px;'
);
