document.addEventListener('DOMContentLoaded', () => {
  // Cinematic Initial Animations
  const animateOnLoad = document.querySelectorAll('.animate-on-load');
  setTimeout(() => {
    document.body.classList.remove('loading-state');
    animateOnLoad.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('is-visible');
      }, index * 200);
    });
  }, 300);

  // Intersection Observer for Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '-50px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: unobserve after showing
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(el => observer.observe(el));

  // Navbar Transition Logic
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth Navigation for Professional UX
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const offset = navbar.classList.contains('scrolled') ? 80 : 120;
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  // Logo Interaction
  const logo = document.querySelector('.logo-text');
  logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.05)';
  });
  logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(1)';
  });
});
