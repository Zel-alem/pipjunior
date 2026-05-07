/* ─────────────────────────────────────────
   js/data.js  —  All site content/data
───────────────────────────────────────── */

const SITE = {
  name:    'Pip Junior Publishing',
  tagline: 'Smart Habits. Bright Future.',
  url:     'https://www.pipjunior.com',
  email:   'hello@pipjunior.com',
};

const BOOKS = [
  {
    id:         1,
    slug:       'pips-first-dollar',
    title:      "Pip's First Dollar",
    subtitle:   'A Money Adventure',
    age:        'Ages 4–8',
    coverClass: 'c1',
    coverEmoji: '📗',
    badge:      '⭐ Bestseller',
    desc:       'Join Pip as he discovers how coins work, what saving means, and why patience always pays off in the end.',
    topics:     ['Saving', 'Earning', 'Goals'],
    price:      14.99,
    origPrice:  18.00,
    buyUrl:     '#',
  },
  {
    id:         2,
    slug:       'money-habit-tracker',
    title:      'Money Habit Tracker',
    subtitle:   'Interactive Workbook',
    age:        'Ages 6–10',
    coverClass: 'c2',
    coverEmoji: '📒',
    badge:      '🆕 New',
    desc:       'Savings goals, chore charts, needs vs. wants worksheets, and reward systems — all in one fun workbook.',
    topics:     ['Budgeting', 'Chores', 'Habits'],
    price:      17.99,
    origPrice:  22.00,
    buyUrl:     '#',
  },
  {
    id:         3,
    slug:       'young-investor',
    title:      'Young Investor',
    subtitle:   'Grow Your Money',
    age:        'Ages 8–12',
    coverClass: 'c3',
    coverEmoji: '📘',
    badge:      null,
    desc:       'Learn about entrepreneurship, compound interest, and making your money work for you — for older kids.',
    topics:     ['Investing', 'Business', 'Interest'],
    price:      15.99,
    origPrice:  null,
    buyUrl:     '#',
  },
  {
    id:         4,
    slug:       'complete-bundle',
    title:      'Complete Pip Junior Bundle',
    subtitle:   'All Books + Tracker',
    age:        'Ages 3–12',
    coverClass: 'c4',
    coverEmoji: '📦',
    badge:      '🎁 Best Value',
    desc:       'All books + the Money Habit Tracker + free digital downloads. The ultimate money education starter kit.',
    topics:     ['All Topics', 'Best Value'],
    price:      42.99,
    origPrice:  59.00,
    buyUrl:     '#',
  },
];

const TESTIMONIALS = [
  {
    quote:  "My 6-year-old now has three jars on her dresser — Save, Spend, Share. She set this up herself after reading Pip's First Dollar. I couldn't believe it!",
    name:   'Sarah M.',
    role:   'Mom of 2, Texas',
    avatar: '👩',
    avClass:'av1',
    stars:  5,
  },
  {
    quote:  "I use these books in my Year 3 class. The kids are engaged from page one. They don't realise they're learning — they just think it's fun.",
    name:   'Mr. James T.',
    role:   'Primary School Teacher, UK',
    avatar: '👨',
    avClass:'av2',
    stars:  5,
  },
  {
    quote:  "We bought the full bundle and it was worth every penny. My son now understands why we budget and he even asked to start his own savings jar. Priceless.",
    name:   'Amara D.',
    role:   'Parent of 3, London',
    avatar: '👩',
    avClass:'av3',
    stars:  5,
  },
];

const TRACKER_FEATURES = [
  'My Savings Goal Sheet',
  'Needs vs. Wants Chart',
  'Chores & Rewards Tracker',
  'Weekly Spending Log',
  'Fun Sticker Rewards System',
];

const NAV_LINKS = [
  { label: 'Home',         href: '/index.html' },
  { label: 'Books',        href: '/pages/books.html' },
  { label: 'Free Tracker', href: '/pages/tracker.html' },
  { label: 'About',        href: '/pages/about.html' },
  { label: 'Contact',      href: '/pages/contact.html' },
];