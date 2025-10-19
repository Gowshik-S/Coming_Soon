// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Countdown Timer
function updateCountdown() {
  // Set target time to 2 hours and 30 minutes from now
  const now = new Date().getTime();
  const targetTime = now + (2 * 60 * 60 * 1000) + (30 * 60 * 1000); // 2 hours 30 minutes

  const interval = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeLeft = targetTime - currentTime;

    if (timeLeft <= 0) {
      clearInterval(interval);
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      document.getElementById('progressFill').style.width = '100%';
      document.getElementById('progressText').textContent = '100% Complete';
      return;
    }

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Update progress bar (assuming 2.5 hours total, starting from 85%)
    const totalTime = 2.5 * 60 * 60 * 1000; // 2.5 hours in milliseconds
    const elapsed = totalTime - timeLeft;
    const progress = Math.min(85 + (elapsed / totalTime) * 15, 100); // Start at 85%, go to 100%
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = Math.round(progress) + '% Complete';
  }, 1000);
}

// Initialize countdown
updateCountdown();

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
  // Add hover effects to contact links
  const contactLinks = document.querySelectorAll('.contact-link');
  contactLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-2px)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)';
    });
  });

  // Add click effects to social links
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Prevent default if no href
      if (!link.getAttribute('href') || link.getAttribute('href') === '#') {
        e.preventDefault();
        // Add a brief animation
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
          link.style.transform = 'scale(1)';
        }, 150);
      }
    });
  });
});

// Add smooth scrolling for any anchor links (if added later)
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