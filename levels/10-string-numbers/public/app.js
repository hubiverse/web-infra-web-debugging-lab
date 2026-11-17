const lines = document.getElementById('cart-lines');
const subtotalEl = document.getElementById('subtotal');
const shippingEl = document.getElementById('shipping');
const totalEl = document.getElementById('total');
const message = document.getElementById('message');

// Show one line of the cart
function cartLine(item) {
  const lineTotal = item.price * item.quantity;
  const row = document.createElement('li');
  row.className = 'card row';
  row.innerHTML = `<span>${item.name} × ${item.quantity}</span><span>$${lineTotal.toFixed(2)}</span>`;
  return row;
}

// Load the cart when the page opens
async function loadCart() {
  const res = await fetch('/api/cart');
  if (!res.ok) {
    message.textContent = 'Could not load the cart.';
    return;
  }
  const cart = await res.json();
  cart.items.forEach((item) => lines.appendChild(cartLine(item)));

  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + cart.shipping;

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  shippingEl.textContent = `$${cart.shipping}`;
  totalEl.textContent = `$${total}`;
}

loadCart();
