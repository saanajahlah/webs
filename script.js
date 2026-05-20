/* =====================================================
   BREWLY — Café Online Store
   script.js — Main JavaScript
   ===================================================== */

// =====================================================
// 1. PRODUCT DATA
// =====================================================

const products = [
  // --- Coffee ---
  {
    id: 1, category: 'coffee',
    name: 'Espresso Classico',
    emoji: '☕',
    badge: 'popular', badgeLabel: '🔥 Populer',
    price: 28000, oldPrice: null,
    rating: 4.9, reviews: 1240,
    desc: 'Espresso murni dengan crema tebal dan aroma kopi Arabika pilihan dari Aceh Gayo. Diseduh fresh setiap saat untuk pengalaman kopi terbaik Anda.',
    catLabel: 'Coffee'
  },
  {
    id: 2, category: 'coffee',
    name: 'Caramel Latte',
    emoji: '🍵',
    badge: 'new', badgeLabel: '✨ Baru',
    price: 42000, oldPrice: null,
    rating: 4.8, reviews: 875,
    desc: 'Paduan sempurna espresso double shot dengan susu oat creamy dan saus karamel homemade. Manis, lembut, dan memanjakan.',
    catLabel: 'Coffee'
  },
  {
    id: 3, category: 'coffee',
    name: 'Matcha Latte',
    emoji: '🍵',
    badge: null, badgeLabel: '',
    price: 38000, oldPrice: 45000,
    rating: 4.7, reviews: 920,
    desc: 'Matcha ceremonial grade premium dari Uji, Jepang, dikombinasikan dengan susu almond segar. Earthy, creamy, dan menyegarkan.',
    catLabel: 'Coffee'
  },
  {
    id: 4, category: 'coffee',
    name: 'Cold Brew Midnight',
    emoji: '🧊',
    badge: 'sale', badgeLabel: '💰 Promo',
    price: 35000, oldPrice: 48000,
    rating: 4.9, reviews: 2100,
    desc: 'Cold brew 20 jam dengan biji kopi Toraja dark roast. Kuat, pekat, dan menyegarkan dengan note coklat dan kayu manis.',
    catLabel: 'Coffee'
  },

  // --- Makanan Ringan ---
  {
    id: 5, category: 'snack',
    name: 'Croissant Au Beurre',
    emoji: '🥐',
    badge: 'new', badgeLabel: '✨ Baru',
    price: 32000, oldPrice: null,
    rating: 4.8, reviews: 540,
    desc: 'Croissant klasik Prancis dengan 27 lapisan mentega Lurpak premium. Renyah di luar, lembut di dalam. Dipanggang fresh setiap pagi.',
    catLabel: 'Makanan Ringan'
  },
  {
    id: 6, category: 'snack',
    name: 'Cheese Toast',
    emoji: '🧀',
    badge: null, badgeLabel: '',
    price: 25000, oldPrice: null,
    rating: 4.6, reviews: 380,
    desc: 'Roti sourdough premium dipanggang dengan perpaduan mozzarella, cheddar, dan parmesan. Lumer sempurna dengan taburan herb segar.',
    catLabel: 'Makanan Ringan'
  },
  {
    id: 7, category: 'snack',
    name: 'Mixed Nuts Bowl',
    emoji: '🥜',
    badge: 'popular', badgeLabel: '🔥 Populer',
    price: 29000, oldPrice: null,
    rating: 4.5, reviews: 290,
    desc: 'Campuran kacang premium panggang — almond, cashew, walnut, dan pistachio dengan bumbu rosemary dan garam Himalaya.',
    catLabel: 'Makanan Ringan'
  },
  {
    id: 8, category: 'snack',
    name: 'Banana Bread Slice',
    emoji: '🍌',
    badge: 'sale', badgeLabel: '💰 Promo',
    price: 22000, oldPrice: 30000,
    rating: 4.7, reviews: 610,
    desc: 'Banana bread homemade dengan pisang Raja yang matang sempurna, walnut, dan cikal coklat. Lembut, moist, dan aromanya menggoda.',
    catLabel: 'Makanan Ringan'
  },

  // --- Makanan Berat ---
  {
    id: 9, category: 'main',
    name: 'Eggs Benedict',
    emoji: '🍳',
    badge: 'popular', badgeLabel: '🔥 Populer',
    price: 75000, oldPrice: null,
    rating: 4.9, reviews: 1890,
    desc: 'Telur poached di atas English muffin panggang dengan smoked beef dan saus hollandaise klasik. Sarapan mewah di café kesayangan Anda.',
    catLabel: 'Makanan Berat'
  },
  {
    id: 10, category: 'main',
    name: 'Nasi Goreng Café',
    emoji: '🍚',
    badge: 'new', badgeLabel: '✨ Baru',
    price: 62000, oldPrice: null,
    rating: 4.8, reviews: 750,
    desc: 'Nasi goreng khas café dengan beras premium, ayam panggang, telur mata sapi, acar segar, dan kerupuk renyah. Cita rasa autentik Nusantara.',
    catLabel: 'Makanan Berat'
  },
  {
    id: 11, category: 'main',
    name: 'Pasta Carbonara',
    emoji: '🍝',
    badge: null, badgeLabel: '',
    price: 85000, oldPrice: 100000,
    rating: 4.7, reviews: 430,
    desc: 'Fettuccine al dente dengan saus carbonara creamy autentik — telur, parmesan, guanciale, dan lada hitam kasar. Rezeki Italia di Jakartamu.',
    catLabel: 'Makanan Berat'
  },
  {
    id: 12, category: 'main',
    name: 'Grilled Chicken Bowl',
    emoji: '🥗',
    badge: 'sale', badgeLabel: '💰 Promo',
    price: 68000, oldPrice: 85000,
    rating: 4.6, reviews: 560,
    desc: 'Dada ayam free-range dipanggang dengan rempah Mediterranean, disajikan di atas nasi merah dengan hummus, salad segar, dan tahini dressing.',
    catLabel: 'Makanan Berat'
  },

  // --- Dessert ---
  {
    id: 13, category: 'dessert',
    name: 'Tiramisu Classic',
    emoji: '🍰',
    badge: 'popular', badgeLabel: '🔥 Populer',
    price: 48000, oldPrice: null,
    rating: 4.9, reviews: 2340,
    desc: 'Tiramisu otentik dengan ladyfinger yang direndam espresso kuat, lapisan mascarpone lembut, dan taburan kokoa premium Valrhona.',
    catLabel: 'Dessert'
  },
  {
    id: 14, category: 'dessert',
    name: 'Crème Brûlée',
    emoji: '🍮',
    badge: 'new', badgeLabel: '✨ Baru',
    price: 52000, oldPrice: null,
    rating: 4.8, reviews: 380,
    desc: 'Custard vanilla Madagascar yang creamy dengan kulit karamel tipis yang di-brulee sempurna. Dessert klasik Prancis yang tak lekang waktu.',
    catLabel: 'Dessert'
  },
  {
    id: 15, category: 'dessert',
    name: 'Lava Cake Coklat',
    emoji: '🎂',
    badge: 'sale', badgeLabel: '💰 Promo',
    price: 42000, oldPrice: 55000,
    rating: 4.9, reviews: 1650,
    desc: 'Molten lava cake dark chocolate dengan pusat coklat cair yang mengalir saat dipotong. Disajikan hangat dengan es krim vanila artisan.',
    catLabel: 'Dessert'
  },
  {
    id: 16, category: 'dessert',
    name: 'Mango Panna Cotta',
    emoji: '🥭',
    badge: null, badgeLabel: '',
    price: 38000, oldPrice: null,
    rating: 4.7, reviews: 490,
    desc: 'Panna cotta susu dan cream yang lembut dengan coulis mangga Harum Manis segar dan remahan shortbread butter. Segar dan elegan.',
    catLabel: 'Dessert'
  },
];

// =====================================================
// 2. STATE
// =====================================================

let currentCategory = 'all';     // Active category filter
let searchQuery = '';             // Search keyword
let cart = [];                    // Cart items array
let currentProduct = null;        // Product in modal
let currentQty = 1;               // Quantity selector in modal
let currentSlide = 0;             // Slider index
let sliderInterval = null;        // Auto-slide timer

// =====================================================
// 3. RENDER PRODUCTS
// =====================================================

/**
 * Generate star icons (full, half, empty) based on rating
 */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/**
 * Format price in Indonesian Rupiah format
 */
function formatPrice(price) {
  return 'Rp ' + price.toLocaleString('id-ID');
}

/**
 * Filter and render product cards into the grid
 */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyState');
  const countEl = document.getElementById('productCount');
  const titleEl = document.getElementById('sectionTitle');

  // Filter by category + search
  const filtered = products.filter(p => {
    const matchCat = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.catLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  // Update section title
  const titles = {
    all: 'Semua Produk',
    coffee: 'Coffee',
    snack: 'Makanan Ringan',
    main: 'Makanan Berat',
    dessert: 'Dessert'
  };
  titleEl.textContent = searchQuery ? `Hasil: "${searchQuery}"` : titles[currentCategory];
  countEl.textContent = `${filtered.length} produk`;

  // Empty state
  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  // Render cards with staggered animation delay
  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" 
         onclick="openModal(${p.id})"
         style="animation-delay: ${i * 0.06}s">
      <!-- Image area -->
      <div class="card-img-wrap">
        <span class="card-emoji">${p.emoji}</span>
        ${p.badge ? `<span class="card-badge badge-${p.badge}">${p.badgeLabel}</span>` : ''}
      </div>
      <!-- Card info -->
      <div class="card-body">
        <p class="card-cat">${p.catLabel}</p>
        <h3 class="card-name">${p.name}</h3>
        <div class="card-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-num">${p.rating} (${p.reviews.toLocaleString('id-ID')})</span>
        </div>
        <div class="card-footer">
          <div>
            <span class="card-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="card-price-old">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <button class="card-detail-btn" onclick="event.stopPropagation(); openModal(${p.id})">
            Detail
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// =====================================================
// 4. CATEGORY FILTER
// =====================================================

/**
 * Switch active category and re-render products
 */
function filterCategory(cat, btn) {
  currentCategory = cat;
  searchQuery = '';
  document.getElementById('searchInput').value = '';

  // Update active button state
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  renderProducts();

  // Smooth scroll to products
  document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// =====================================================
// 5. SEARCH
// =====================================================

/**
 * Handle search input — live filter
 */
function handleSearch() {
  const val = document.getElementById('searchInput').value.trim();
  searchQuery = val;
  currentCategory = 'all';
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.cat-btn').classList.add('active'); // "Semua"
  renderProducts();
  document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
}

// Live search on typing
document.getElementById('searchInput').addEventListener('input', function () {
  searchQuery = this.value.trim();
  renderProducts();
});

// Search on Enter
document.getElementById('searchInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') handleSearch();
});

// =====================================================
// 6. PRODUCT MODAL
// =====================================================

/**
 * Open product detail modal
 */
function openModal(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;

  currentProduct = p;
  currentQty = 1;

  // Populate modal fields
  document.getElementById('modalImg').textContent = p.emoji;
  document.getElementById('modalCat').textContent = p.catLabel;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalRating').innerHTML =
    `<span class="stars">${renderStars(p.rating)}</span>
     <span>${p.rating} · ${p.reviews.toLocaleString('id-ID')} ulasan</span>`;

  // Price (with old price if exists)
  document.getElementById('modalPrice').innerHTML =
    p.oldPrice
      ? `${formatPrice(p.price)} <span style="font-size:0.9rem;color:var(--text-light);text-decoration:line-through;font-weight:400;">${formatPrice(p.oldPrice)}</span>`
      : formatPrice(p.price);

  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('qtyDisplay').textContent = currentQty;

  // Badge
  const badgeEl = document.getElementById('modalBadge');
  if (p.badge) {
    badgeEl.textContent = p.badgeLabel;
    badgeEl.className = `modal-badge badge-${p.badge}`;
    badgeEl.style.display = 'block';
  } else {
    badgeEl.style.display = 'none';
  }

  // Show overlay
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Close the product modal
 */
function closeModal(event, force = false) {
  if (force || (event && event.target === document.getElementById('modalOverlay'))) {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
    currentProduct = null;
  }
}

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal(null, true);
    if (document.getElementById('cartDrawer').classList.contains('open')) {
      toggleCart();
    }
  }
});

/**
 * Change quantity in modal (+1 or -1)
 */
function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('qtyDisplay').textContent = currentQty;
}

// =====================================================
// 7. CART
// =====================================================

/**
 * Add product to cart (from modal)
 */
function addToCartFromModal() {
  if (!currentProduct) return;
  addToCart(currentProduct, currentQty);
  closeModal(null, true);
}

/**
 * Add item to cart array and update UI
 */
function addToCart(product, qty = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  updateCartUI();
  showToast(`✅ ${product.name} ditambahkan ke keranjang`);
}

/**
 * Remove item from cart by product id
 */
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
  showToast('🗑️ Produk dihapus dari keranjang');
}

/**
 * Render cart items in the drawer
 */
function updateCartUI() {
  const cartItemsEl = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartCountEl = document.getElementById('cartCount');

  // Update badge count
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = totalItems;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <p>Keranjang masih kosong</p>
      </div>`;
    cartFooter.style.display = 'none';
    return;
  }

  // Render each cart item
  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-qty">× ${item.qty}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Hapus">✕</button>
    </div>
  `).join('');

  // Total price
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = formatPrice(total);
  cartFooter.style.display = 'flex';
}

/**
 * Toggle cart drawer open/close
 */
function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = drawer.classList.contains('open');

  if (isOpen) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  } else {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Buy now — add to cart then open cart drawer
 */
function buyNow() {
  if (!currentProduct) return;
  addToCart(currentProduct, currentQty);
  closeModal(null, true);
  setTimeout(() => toggleCart(), 400);
}

/**
 * Checkout handler (placeholder)
 */
function checkout() {
  if (cart.length === 0) return;
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  showToast(`🎉 Pesanan ${formatPrice(total)} sedang diproses!`);
  cart = [];
  updateCartUI();
  toggleCart();
}

// =====================================================
// 8. TOAST NOTIFICATION
// =====================================================

let toastTimer = null;

/**
 * Show a brief toast notification message
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  // Clear previous timer if any
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// =====================================================
// 9. HERO SLIDER
// =====================================================

const SLIDE_COUNT = 3;

/**
 * Build slider dot indicators
 */
function buildDots() {
  const container = document.getElementById('sliderDots');
  container.innerHTML = '';
  for (let i = 0; i < SLIDE_COUNT; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.onclick = () => goToSlide(i);
    container.appendChild(dot);
  }
}

/**
 * Navigate to a specific slide
 */
function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (index + SLIDE_COUNT) % SLIDE_COUNT;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

/** Next slide */
function nextSlide() {
  goToSlide(currentSlide + 1);
  resetAutoSlide();
}

/** Previous slide */
function prevSlide() {
  goToSlide(currentSlide - 1);
  resetAutoSlide();
}

/** Start auto-slide timer */
function startAutoSlide() {
  sliderInterval = setInterval(() => nextSlide(), 5000);
}

/** Reset auto-slide (on manual navigation) */
function resetAutoSlide() {
  clearInterval(sliderInterval);
  startAutoSlide();
}

// =====================================================
// 10. NAVBAR SCROLL EFFECT
// =====================================================

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 24px rgba(44,24,16,0.12)';
  } else {
    navbar.style.boxShadow = '0 2px 12px rgba(44,24,16,0.08)';
  }
});

// =====================================================
// 11. MOBILE MENU
// =====================================================

/**
 * Toggle mobile category menu visibility
 */
function toggleMobileMenu() {
  const cats = document.getElementById('navCategories');
  cats.style.display = cats.style.display === 'none' ? 'flex' : 'none';
}

// =====================================================
// 12. INIT
// =====================================================

/**
 * Initialize the app on page load
 */
function init() {
  buildDots();
  startAutoSlide();
  renderProducts();

  // Add data-cat attributes to category buttons for easy reference
  const catMap = ['all', 'coffee', 'snack', 'main', 'dessert'];
  document.querySelectorAll('.cat-btn').forEach((btn, i) => {
    btn.setAttribute('data-cat', catMap[i] || 'all');
  });
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);
