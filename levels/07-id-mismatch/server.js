const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: 'Ama Mensah', email: 'ama@example.com', city: 'Accra' },
  { id: 2, name: 'Kwame Boateng', email: 'kwame@example.com', city: 'Kumasi' },
  { id: 3, name: 'Aline Uwase', email: 'aline@example.com', city: 'Kigali' },
  { id: 4, name: 'Jean Mugisha', email: 'jean@example.com', city: 'Huye' },
  { id: 5, name: 'Fatou Diallo', email: 'fatou@example.com', city: 'Dakar' },
  { id: 6, name: 'Tunde Bakare', email: 'tunde@example.com', city: 'Lagos' },
];

app.use(express.static(path.join(__dirname, 'public')));
app.use('/shared', express.static(path.join(__dirname, '..', '..', 'shared')));

app.get('/api/users', (req, res) => {
  res.json(users);
});

// Get one user by id
app.get('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Level 07 running at http://localhost:${PORT}`);
});
