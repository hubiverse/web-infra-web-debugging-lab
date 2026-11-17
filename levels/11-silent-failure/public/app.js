const list = document.getElementById('order-list');
const loginButton = document.getElementById('login');
const loginStatus = document.getElementById('login-status');
const message = document.getElementById('message');

// Show the orders, or a note when there are none
function renderOrders(orders) {
  if (orders.length === 0) {
    list.innerHTML = '<li class="empty">No orders yet.</li>';
    return;
  }
  list.innerHTML = orders
    .map((order) => `<li class="card row">
      <span><span class="name">#${order.id}</span> ${order.item}</span>
      <span>$${order.amount.toFixed(2)} <span class="status">${order.status}</span></span>
    </li>`)
    .join('');
}

// Fetch this user's orders
async function loadOrders() {
  message.textContent = '';
  const token = localStorage.getItem('token');
  try {
    const res = await fetch('/api/orders', { headers: { Authorization: `Bearer ${token}` } });
    const body = await res.json();
    renderOrders(body.orders || []);
  } catch (err) {
    renderOrders([]);
  }
}

// Pretend to log in: save a token, then load orders
loginButton.addEventListener('click', () => {
  localStorage.setItem('authToken', 'demo-token-123');
  loginStatus.textContent = 'Logged in.';
  loadOrders();
});

// Already logged in? Load orders right away
if (localStorage.getItem('authToken')) {
  loginStatus.textContent = 'Logged in.';
  loadOrders();
}
