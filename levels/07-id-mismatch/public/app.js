const list = document.getElementById('user-list');
const details = document.getElementById('details');
const message = document.getElementById('message');

// Show one user's details in the panel
async function showUser(id) {
  details.textContent = 'Loading...';
  const res = await fetch(`/api/users/${id}`);
  if (res.status === 404) {
    details.textContent = 'User not found';
    return;
  }
  if (!res.ok) {
    details.textContent = `Could not load user (status ${res.status}).`;
    return;
  }
  const user = await res.json();
  details.innerHTML = `<div class="name">${user.name}</div>
    <div class="meta">${user.email}</div>
    <div class="meta">${user.city}</div>`;
}

// Load the list of users when the page opens
async function loadUsers() {
  const res = await fetch('/api/users');
  if (!res.ok) {
    message.textContent = 'Could not load users.';
    return;
  }
  const users = await res.json();
  users.forEach((user) => {
    const item = document.createElement('li');
    item.className = 'card clickable';
    item.textContent = user.name;
    item.addEventListener('click', () => showUser(user.id));
    list.appendChild(item);
  });
}

loadUsers();
