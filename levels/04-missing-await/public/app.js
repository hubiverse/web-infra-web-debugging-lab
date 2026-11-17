const list = document.getElementById('user-list');
const countLabel = document.getElementById('user-count');
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
  const res = await fetch('/api/users');
  if (!res.ok) {
    message.textContent = 'Could not load users.';
    return;
  }
  const users = res.json();
  users.forEach((user) => list.appendChild(userCard(user)));
  countLabel.textContent = `Loaded ${users.length} users`;
}

loadUsers();
