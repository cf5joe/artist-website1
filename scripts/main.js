const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Smooth scrolling for floating nav & ghost links */
const scrollButtons = document.querySelectorAll('[data-target]');
scrollButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const targetSelector = btn.dataset.target;
    const target = document.querySelector(targetSelector);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
});

/** Section reveal + nav state */
const sections = document.querySelectorAll('[data-section]');
const navDots = document.querySelectorAll('.floating-nav__dot');
sections.forEach((section) => section.setAttribute('data-reveal', 'hidden'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-reveal', 'visible');
        const id = `#${entry.target.id}`;
        navDots.forEach((dot) => {
          dot.classList.toggle('is-active', dot.dataset.target === id);
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach((section) => observer.observe(section));

/** Gallery filtering */
const filterButtons = document.querySelectorAll('.filter-pill');
const galleryCards = document.querySelectorAll('.gallery-card');
filterButtons.forEach((filterBtn) => {
  filterBtn.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('is-active'));
    filterBtn.classList.add('is-active');
    const filter = filterBtn.dataset.filter;
    galleryCards.forEach((card) => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.removeAttribute('data-hidden');
      } else {
        card.setAttribute('data-hidden', 'true');
      }
    });
  });
});

/** Lightbox */
const lightbox = document.querySelector('[data-lightbox-root]');
const lightboxImage = lightbox.querySelector('img');
const lightboxTitle = lightbox.querySelector('h3');
const lightboxDescription = lightbox.querySelector('.lightbox__description');

const openLightbox = (card) => {
  const img = card.querySelector('img');
  const tag = card.querySelector('.gallery-card__tag');
  const bodyText = card.querySelector('p');
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightboxTitle.textContent = tag ? tag.textContent : 'Placeholder piece';
  lightboxDescription.textContent = bodyText ? bodyText.textContent : 'Placeholder description';
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightbox.hidden = true;
  document.body.style.overflow = '';
};

lightbox.addEventListener('click', (event) => {
  if (event.target.hasAttribute('data-lightbox-close')) {
    closeLightbox();
  }
});

const lightboxTriggers = document.querySelectorAll('[data-lightbox]');
lightboxTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const card = trigger.closest('.gallery-card');
    if (card) {
      openLightbox(card);
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) {
    closeLightbox();
  }
});

/** Contact form placeholder submit */
const contactForm = document.querySelector('.contact-form');
const statusEl = document.querySelector('.form-status');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    statusEl.className = 'form-status';
    statusEl.textContent = 'Sending placeholder request…';
    const submitBtn = contactForm.querySelector('[type="submit"]');
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.disabled = false;
      statusEl.classList.add('is-success');
      statusEl.textContent = 'Thank you! This placeholder form is ready to be connected to the final service.';
      contactForm.reset();
    }, 1200);
  });
}

/** Hero parallax (skips if reduced motion) */
if (!prefersReducedMotion) {
  const heroMotifs = document.querySelector('.hero__motifs');
  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.05;
    if (heroMotifs) {
      heroMotifs.style.transform = `translateY(${offset}px)`;
    }
  });
}
