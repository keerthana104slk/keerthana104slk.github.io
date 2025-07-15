// Scroll reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

document.querySelectorAll('.page-section, .hero-text').forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Toggle mobile nav (optional if using a hamburger menu)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Dark mode toggle
const darkToggle = document.createElement('button');
darkToggle.textContent = '🌓';
darkToggle.className = 'dark-toggle';
document.body.appendChild(darkToggle);

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
