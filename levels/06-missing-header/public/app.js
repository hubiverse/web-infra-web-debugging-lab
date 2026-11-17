const list = document.getElementById('user-list');
const form = document.getElementById('add-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');

// Load users and show them in the list
async function loadUsers() {
  const res = await fetch('/api/users');
  if (!res.ok) {
    message.textContent = 'Could not load users.';
    return;
  }
  const users = await res.json();
  list.innerHTML = users
    .map((user) => `<li class="card"><div class="name">${user.name}</div><div class="meta">${user.email}</div></li>`)
    .join('');
}

// Send the new user to the server
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  message.textContent = '';

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  const res = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ name, email }),
  });

  if (!res.ok) {
    const body = await res.json();
    message.textContent = `Error: ${body.error}`;
    return;
  }

  form.reset();
  loadUsers();
});

loadUsers();
