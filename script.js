const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

if (menuToggle && nav) {
  const menuIcon = menuToggle.querySelector('use');
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menuToggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
    nav.classList.toggle('is-open', !open);
    if (menuIcon) menuIcon.setAttribute('href', open ? '#icon-menu' : '#icon-close');
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    nav.classList.remove('is-open');
    if (menuIcon) menuIcon.setAttribute('href', '#icon-menu');
  }));
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.section-reveal, .reveal-child');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const selector = link.getAttribute('href');
    if (!selector || selector === '#') return;
    const target = document.querySelector(selector);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Google Maps — usa o endereço real fornecido pelo Builder e preserva uma URL oficial quando existir.
const locationSection = document.querySelector('[data-location]');
if (locationSection) {
  const rawAddress = (locationSection.dataset.address || '').trim();
  const rawCity = (locationSection.dataset.city || '').trim();
  const mapsLink = locationSection.querySelector('[data-maps-link]');
  const mapsFrame = locationSection.querySelector('[data-maps-frame]');
  const cityLabel = locationSection.querySelector('[data-location-city]');
  const addressLabel = locationSection.querySelector('[data-location-address]');
  const unresolved = (value) => !value || value.includes('{{') || value.includes('}}');

  if (unresolved(rawAddress)) {
    // Sem endereço real, a seção não é exibida para evitar mapa vazio ou incorreto.
    locationSection.hidden = true;
  } else {
    const cityResolved = !unresolved(rawCity);
    const query = [rawAddress, cityResolved ? rawCity : ''].filter(Boolean).join(', ');
    const encodedQuery = encodeURIComponent(query);

    if (addressLabel) {
      addressLabel.replaceChildren(document.createTextNode(rawAddress));
      if (cityResolved) {
        addressLabel.append(document.createElement('br'));
        addressLabel.append(document.createTextNode(rawCity));
      }
    }

    if (mapsLink) {
      const currentHref = (mapsLink.getAttribute('href') || '').trim();
      const hasOfficialUrl = /^https?:\/\//i.test(currentHref) && currentHref !== '#' && !unresolved(currentHref);
      if (!hasOfficialUrl) {
        mapsLink.href = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
      }
    }

    if (mapsFrame) {
      mapsFrame.src = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;
    }

    if (cityLabel && !cityResolved) {
      cityLabel.textContent = 'sua região';
    }
  }
}
