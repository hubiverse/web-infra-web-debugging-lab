const list = document.getElementById('user-list');
const message = document.getElementById('message');

// Load users when the page opens
async function loadUsers() {
  const res = await fetch('/api/users');
  if (!res.ok) {
    message.textContent = 'Could not load users.';
    return;
  }
  const users = await res.json();

  for (const user of users) {
    const place = `${user.address.city}, ${user.address.country}`;
    const item = document.createElement('li');
    item.className = 'card';
    item.innerHTML = `<div class="name">${user.name}</div>
      <div class="meta">${user.email}</div>
      <div class="meta">${place}</div>`;
    list.appendChild(item);
  }
}

loadUsers();
