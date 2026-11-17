const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const usersFile = path.join(__dirname, 'data', 'users.json');
const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/shared', express.static(path.join(__dirname, '..', '..', 'shared')));

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Level 09 running at http://localhost:${PORT}`);
});
