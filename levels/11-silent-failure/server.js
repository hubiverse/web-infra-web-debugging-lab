const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const VALID_TOKEN = 'demo-token-123';

const orders = [
  { id: 101, item: 'Wireless Earbuds', amount: 49.0, status: 'shipped' },
  { id: 102, item: 'Rain Jacket', amount: 39.5, status: 'processing' },
  { id: 103, item: 'Things Fall Apart', amount: 12.99, status: 'delivered' },
  { id: 104, item: 'Phone Charger', amount: 18.75, status: 'processing' },
];

app.use(express.static(path.join(__dirname, 'public')));
app.use('/shared', express.static(path.join(__dirname, '..', '..', 'shared')));

// Orders are only for logged-in users
app.get('/api/orders', (req, res) => {
  if (req.get('Authorization') !== `Bearer ${VALID_TOKEN}`) {
    return res.status(401).json({ error: 'Invalid or missing token' });
  }
  res.json({ orders });
});

app.listen(PORT, () => {
  console.log(`Level 11 running at http://localhost:${PORT}`);
});
