/* ─────────────────────────────────────────
   js/main.js  —  Nav, reveal, particles, footer
───────────────────────────────────────── */
(function () {
  'use strict';

  /* ─── NAV ─── */
  const nav       = document.getElementById('siteNav');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const overlay   = document.getElementById('mobileOverlay');

  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  function closeMenu() {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
    overlay?.classList.remove('show');
    document.body.style.overflow = '';
  }
  function openMenu() {
    hamburger?.classList.add('open');
    navLinks?.classList.add('open');
    overlay?.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  hamburger?.addEventListener('click', () =>
    hamburger.classList.contains('open') ? closeMenu() : openMenu()
  );
  overlay?.addEventListener('click', closeMenu);
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  /* ─── ACTIVE NAV LINK ─── */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  navLinks?.querySelectorAll('a:not(.nav-cta)').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    a.classList.toggle('active', href === path);
  });

  /* ─── SCROLL REVEAL ─── */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0) * 110;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  revealEls.forEach(el => revealObs.observe(el));
  window.__revealObserver = revealObs; // expose for dynamic content

  /* ─── HERO STARS ─── */
  const starContainer = document.getElementById('heroStars');
  if (starContainer) {
    for (let i = 0; i < 60; i++) {
      const s   = document.createElement('div');
      s.className = 'star';
      const sz  = 2 + Math.random() * 3;
      Object.assign(s.style, {
        left:              Math.random() * 100 + '%',
        top:               Math.random() * 100 + '%',
        width:             sz + 'px',
        height:            sz + 'px',
        animationDuration: (2 + Math.random() * 4) + 's',
        animationDelay:    (Math.random() * 7) + 's',
      });
      starContainer.appendChild(s);
    }
  }

  /* ─── FLOATING PARTICLES ─── */
  const EMOJIS  = ['💰', '🪙', '💵', '⭐', '✨', '💫'];
  for (let i = 0; i < 10; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    Object.assign(p.style, {
      left:              Math.random() * 100 + '%',
      fontSize:          (1 + Math.random() * 0.9) + 'rem',
      animationDuration: (16 + Math.random() * 20) + 's',
      animationDelay:    (Math.random() * 25) + 's',
    });
    document.body.appendChild(p);
  }

  /* ─── SMOOTH ANCHOR SCROLL ─── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH - 12, behavior: 'smooth' });
      }
    });
  });

  /* ─── BACK TO TOP ─── */
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => btt.classList.toggle('show', window.scrollY > 500), { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ─── FOOTER ─── */
  const footerMount = document.getElementById('footerMount');
  if (footerMount && typeof renderFooter === 'function') renderFooter(footerMount);

})();