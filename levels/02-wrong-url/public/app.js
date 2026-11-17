const list = document.getElementById('user-list');
const message = document.getElementById('message');

// Build one card for a user
function userCard(user) {
  const item = document.createElement('li');
  item.className = 'card';
  item.innerHTML = `<div class="name">${user.name}</div><div class="meta">${user.email} · ${user.city}</div>`;
  return item;
}

// Load users when the page opens
async function loadUsers() {
  const res = await fetch('/api/user');
  if (!res.ok) {
    message.textContent = 'Could not load users.';
    return;
  }
  const users = await res.json();
  users.forEach((user) => list.appendChild(userCard(user)));
}

loadUsers();
