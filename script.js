const products = [
  {
    id: 1,
    name: "هاتف ذكي",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "سماعات لاسلكية",
    price: 400,
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "كاميرا رقمية",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
];

const productsContainer = document.getElementById("products-container");

function displayProducts() {
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="price">${product.price} ج.م</p>
      <button onclick="addToCart(${product.id})">أضف إلى السلة</button>
    `;

    productsContainer.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  alert(`تم إضافة المنتج "${product.name}" إلى السلة!`);
}

displayProducts();
let cart = JSON.parse(localStorage.getItem("cart")) || {};

function updateCartCount() {
  const count = Object.values(cart).reduce((acc, qty) => acc + qty, 0);
  document.getElementById("cart-count").textContent = `السلة: ${count}`;
}

function addToCart(productId) {
  if (cart[productId]) {
    cart[productId]++;
  } else {
    cart[productId] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`تم إضافة المنتج إلى السلة!`);
}

displayProducts();
updateCartCount();
