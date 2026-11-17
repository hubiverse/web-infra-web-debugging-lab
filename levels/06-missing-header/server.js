const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: 'Ama Mensah', email: 'ama@example.com' },
  { id: 2, name: 'Kwame Boateng', email: 'kwame@example.com' },
  { id: 3, name: 'Aline Uwase', email: 'aline@example.com' },
];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/shared', express.static(path.join(__dirname, '..', '..', 'shared')));

app.get('/api/users', (req, res) => {
  res.json(users);
});

// Add a new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' });
  }
  const nextId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const user = { id: nextId, name, email };
  users.push(user);
  res.status(201).json(user);
});

app.listen(PORT, () => {
  console.log(`Level 06 running at http://localhost:${PORT}`);
});
