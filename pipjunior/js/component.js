/* ─────────────────────────────────────────
   js/components.js  —  Reusable HTML components
───────────────────────────────────────── */

/* ── Book Card ── */
function BookCard(book) {
  const badge = book.badge
    ? `<div class="book-badge">${book.badge}</div>`
    : '';
  const origPrice = book.origPrice
    ? `<span class="price-orig">$${book.origPrice.toFixed(2)}</span>`
    : '';
  const tags = book.topics
    .map(t => `<span class="book-tag">${t}</span>`)
    .join('');

  return `
    <div class="book-cover ${book.coverClass}">
      <div class="cover-shine"></div>
      <span style="position:relative;z-index:1;">${book.coverEmoji}</span>
      ${badge}
    </div>
    <div class="book-body">
      <div class="book-age">${book.age}</div>
      <h3>${book.title}</h3>
      <div class="book-subtitle">${book.subtitle}</div>
      <p>${book.desc}</p>
      <div class="book-tags">${tags}</div>
      <div class="book-footer">
        <div class="book-price">
          ${origPrice}
          <span class="price-now">$${book.price.toFixed(2)}</span>
        </div>
        <a href="${book.buyUrl}" class="btn btn-navy btn-sm">🛒 Buy Now</a>
      </div>
    </div>
  `;
}

/* ── Testimonial Card ── */
function TestiCard(t) {
  const stars = '★'.repeat(t.stars) + '☆'.repeat(5 - t.stars);
  return `
    <div class="testi-stars">${stars}</div>
    <blockquote>"${t.quote}"</blockquote>
    <div class="testi-author">
      <div class="author-avatar ${t.avClass}">${t.avatar}</div>
      <div>
        <strong class="author-name">${t.name}</strong>
        <span class="author-role">${t.role}</span>
      </div>
    </div>
  `;
}

/* ── Footer HTML ── */
function renderFooter(root) {
  const year = new Date().getFullYear();
  root.innerHTML = `
  <!-- NEWSLETTER BAR -->
  <section class="newsletter-bar">
    <div class="section-wrap">
      <div class="newsletter-inner">
        <div class="newsletter-text">
          <h3>🎁 Get the Free Money Habit Tracker</h3>
          <p>Join thousands of families — free printable worksheets straight to your inbox.</p>
        </div>
        <form class="newsletter-form" id="newsletterForm" novalidate>
          <input type="text"  name="name"  class="nl-input" placeholder="Your first name" autocomplete="given-name" />
          <input type="email" name="email" class="nl-input" placeholder="Your email address" required autocomplete="email" />
          <button type="submit" class="btn btn-gold">⬇️ Get Free Tracker</button>
          <div class="nl-msg" id="nlMsg"></div>
        </form>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="footer-inner section-wrap">
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="footer-owl">🦉</span>
          <div>
            <div class="footer-name">PipJunior</div>
            <div class="footer-pub">PUBLISHING</div>
          </div>
        </div>
        <p>Empowering the next generation with smart money habits through stories, tools, and activities they actually love.</p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">📘</a>
          <a href="#" class="social-link" aria-label="Instagram">📸</a>
          <a href="#" class="social-link" aria-label="TikTok">🎵</a>
          <a href="#" class="social-link" aria-label="YouTube">▶️</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Books</h4>
        <ul>
          <li><a href="/pages/books.html#pips-first-dollar">Pip's First Dollar</a></li>
          <li><a href="/pages/books.html#money-habit-tracker">Money Habit Tracker</a></li>
          <li><a href="/pages/books.html#young-investor">Young Investor</a></li>
          <li><a href="/pages/books.html#complete-bundle">Complete Bundle</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="/pages/tracker.html">Free Tracker</a></li>
          <li><a href="/index.html#audience">For Parents</a></li>
          <li><a href="/index.html#audience">For Teachers</a></li>
          <li><a href="/pages/about.html">Our Story</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/pages/about.html">About Us</a></li>
          <li><a href="/pages/contact.html">Contact</a></li>
          <li><a href="/pages/contact.html">Wholesale Orders</a></li>
          <li><a href="/pages/privacy.html">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom section-wrap">
      <p>© ${year} Pip Junior Publishing. All rights reserved. | <a href="mailto:hello@pipjunior.com">hello@pipjunior.com</a></p>
      <div class="footer-tagline">Smart Habits. Bright Future. 🌟</div>
    </div>
  </footer>`;

  // Wire newsletter form
  const form  = root.querySelector('#newsletterForm');
  const msgEl = root.querySelector('#nlMsg');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const name  = form.name?.value.trim() || '';
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      msgEl.textContent = '⚠️ Please enter a valid email.';
      msgEl.style.color = '#ff6b6b';
      return;
    }
    const btn = form.querySelector('button');
    btn.textContent = '⏳ Sending...';
    btn.disabled = true;
    // Simulate (replace with real endpoint when going live)
    await new Promise(r => setTimeout(r, 900));
    msgEl.textContent = `🎉 Done! Check your inbox, ${name || 'friend'}!`;
    msgEl.style.color = '#3dcc6e';
    form.reset();
    btn.textContent = '⬇️ Get Free Tracker';
    btn.disabled = false;
  });
}