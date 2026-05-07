/* js/books.js */
(function(){
  'use strict';

  // ── Render all books ──
  const grid = document.getElementById('booksGrid');
  if (grid) {
    BOOKS.forEach((b, i) => {
      const el = document.createElement('div');
      el.className = 'book-card reveal';
      el.dataset.delay = i % 4;
      el.id = b.slug;
      el.dataset.ageGroup = b.id === 1 ? '3-5,6-8' : b.id === 2 ? '6-8' : b.id === 3 ? '8-12' : 'bundle';
      el.innerHTML = BookCard(b);
      grid.appendChild(el);
      if (window.__revealObserver) window.__revealObserver.observe(el);
    });
  }

  // ── Filter tabs ──
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      grid?.querySelectorAll('.book-card').forEach(card => {
        const groups = card.dataset.ageGroup || '';
        card.style.display = (filter === 'all' || groups.includes(filter)) ? '' : 'none';
      });
    });
  });

  // ── FAQ ──
  const FAQS = [
    { q: 'What age are the books suitable for?', a: 'Our books cover ages 3–12, with different titles targeted at different developmental stages. Pip\'s First Dollar is great for 4–8 year olds, while Young Investor suits older children aged 8–12.' },
    { q: 'Are these books available in physical and digital formats?', a: 'Yes! All books are available as physical copies delivered to your door, and digital/PDF versions are available for immediate download after purchase.' },
    { q: 'Can teachers use these books in classrooms?', a: 'Absolutely. Many of our books come with discussion guides and classroom-ready activity sheets. We also offer bulk purchase discounts for schools — contact us for pricing.' },
    { q: 'What is your returns policy?', a: 'We offer a 30-day satisfaction guarantee on all physical books. If you\'re not happy, contact us and we\'ll make it right. Digital downloads are non-refundable once downloaded.' },
    { q: 'Do you ship internationally?', a: 'Yes, we ship worldwide! Shipping costs and times vary by region. International orders typically arrive within 7–14 business days.' },
    { q: 'Is the Free Money Habit Tracker really free?', a: 'Yes, 100% free! Just visit our Free Tracker page and download it instantly — no email required, no strings attached.' },
  ];

  const faqList = document.getElementById('faqList');
  if (faqList) {
    FAQS.forEach(faq => {
      const item = document.createElement('div');
      item.className = 'faq-item reveal';
      item.innerHTML = `
        <button class="faq-q" aria-expanded="false">
          ${faq.q}
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-a" role="region">
          <p>${faq.a}</p>
        </div>`;
      const btn = item.querySelector('.faq-q');
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item.open').forEach(el => {
          el.classList.remove('open');
          el.querySelector('.faq-q').setAttribute('aria-expanded','false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded','true');
        }
      });
      faqList.appendChild(item);
      if (window.__revealObserver) window.__revealObserver.observe(item);
    });
  }

  // Deep-link to book from hash
  if (window.location.hash) {
    setTimeout(() => {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior:'smooth', block:'center' });
    }, 400);
  }
})();