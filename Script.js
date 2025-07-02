// Scroll Fade-in
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// Banner Text Rotation
const bannerText = document.getElementById('bannerText');
const phrases = [
  "Welcome to the Ultimate Sports Store",
  "Grab the Best Deals Today!",
  "Top Brands. Great Prices.",
  "Gear Up. Game On!"
];
let i = 0;
setInterval(() => {
  i = (i + 1) % phrases.length;
  bannerText.textContent = phrases[i];
}, 4000);

// Back to Top Button
const topBtn = document.getElementById('topBtn');
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀ Light Mode' : '🌙 Dark Mode';
});

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("open");
}

// Add to script.js
function searchProducts() {
  const term = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.product').forEach(product => {
    const name = product.querySelector('h3').textContent.toLowerCase();
    product.style.display = name.includes(term) ? 'block' : 'none';
  });
}
// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
  cart.push(productId);
  updateCart();
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
}

function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  document.getElementById('cartCount').textContent = cart.length;
}