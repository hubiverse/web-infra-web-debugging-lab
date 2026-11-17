const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const cart = {
  items: [
    { name: 'Notebook', price: 12.5, quantity: 2 },
    { name: 'Pen pack', price: 4.0, quantity: 3 },
    { name: 'Backpack', price: 5.5, quantity: 1 },
  ],
  shipping: '5.00',
  currency: 'USD',
};

app.use(express.static(path.join(__dirname, 'public')));
app.use('/shared', express.static(path.join(__dirname, '..', '..', 'shared')));

app.get('/api/cart', (req, res) => {
  res.json(cart);
});

app.listen(PORT, () => {
  console.log(`Level 10 running at http://localhost:${PORT}`);
});
