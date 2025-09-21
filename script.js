
// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  sunIcon.classList.remove('hidden');
  moonIcon.classList.add('hidden');
}

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  } else {
    localStorage.setItem('theme', 'light');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Typewriter Effect
document.addEventListener('DOMContentLoaded', () => {
  new Typewriter('#typewriter', {
    strings: ['Software Developer', 'AI Enthusiast', 'Full-Stack Engineer', 'Learner'],
    autoStart: true,
    loop: true,
    delay: 75,
    deleteSpeed: 50
  });

  // Smooth scroll for mobile menu
  document.querySelectorAll('#mobile-menu a').forEach(anchor => {
    anchor.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for your message! (This is a frontend demo — no backend)');
    form.reset();
  });

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('section > h2, .p-6, .px-6, .flex');

  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('opacity-100', 'translate-y-0');
      } else {
        el.classList.remove('opacity-100', 'translate-y-0');
      }
    });
  };

  // Add initial classes for transition
  revealElements.forEach(el => {
    el.style.transition = 'all 0.6s ease';
    el.classList.add('opacity-0', 'translate-y-8');
  });

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger on load
});

// Simple welcome message in console
console.log("Welcome to my portfolio! 🎉");

// Optional: Add a click effect on social icons
document.querySelectorAll('.social-icons a').forEach(link => {
  link.addEventListener('click', () => {
    console.log(`Visited: ${link.href}`);
  });
});