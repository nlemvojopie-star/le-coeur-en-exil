// Interactions du site Le Cœur en Exil
document.addEventListener('DOMContentLoaded', () => {
  // 1. Zoom Modal pour la quatrième de couverture
  const coverContainer = document.getElementById('coverContainer');
  const modal = document.getElementById('coverModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (coverContainer && modal) {
    coverContainer.addEventListener('click', () => {
      modal.classList.add('active');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    // Fermer en cliquant en dehors de l'image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
      }
    });
  }

  // 2. Gestion de la lecture exclusive (Audio vs Vidéo)
  const video = document.querySelector('video');
  const audio = document.querySelector('audio');

  if (video && audio) {
    video.addEventListener('play', () => {
      if (!audio.paused) {
        audio.pause();
      }
    });

    audio.addEventListener('play', () => {
      if (!video.paused) {
        video.pause();
      }
    });
  }

  // 3. Défilement doux lors du clic sur les liens d'ancrage
  const links = document.querySelectorAll('.nav-links a, .hero-cta a, #backToTopBtn');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});