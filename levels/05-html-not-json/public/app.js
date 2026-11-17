const list = document.getElementById('product-list');
const select = document.getElementById('category');
const message = document.getElementById('message');

// Build one card for a product
function productCard(product) {
  const item = document.createElement('li');
  item.className = 'card row';
  item.innerHTML = `<div><div class="name">${product.name}</div><div class="meta">${product.category}</div></div>
    <div class="name">$${product.price.toFixed(2)}</div>`;
  return item;
}

// Load products for the chosen category
async function loadProducts(category) {
  list.innerHTML = '';
  message.textContent = '';

  const url = category === 'all' ? '/api/products' : `/api/products?category=${category}`;
  const res = await fetch(url);
  const products = await res.json();

  if (products.length === 0) {
    list.innerHTML = '<li class="empty">No products in this category.</li>';
    return;
  }
  products.forEach((product) => list.appendChild(productCard(product)));
}

select.addEventListener('change', () => loadProducts(select.value));

// Show all products when the page opens
loadProducts('all');
