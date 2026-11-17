const list = document.getElementById('user-list');
const countLabel = document.getElementById('user-count');
const message = document.getElementById('message');

// Build the HTML for one user
function userCard(user) {
  return `<li class="card"><div class="name">${user.name}</div><div class="meta">${user.email} · ${user.city}</div></li>`;
}

// Load users when the page opens
async function loadUsers() {
  const res = await fetch('/api/users');
  if (!res.ok) {
    message.textContent = 'Could not load users.';
    return;
  }
  const body = await res.json();
  const users = body.users;
  list.innerHTML = users.map(userCard).join('');
  countLabel.textContent = `${body.count} users`;
}

loadUsers();
