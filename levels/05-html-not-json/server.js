const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const productsFile = path.join(__dirname, 'data', 'products.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/shared', express.static(path.join(__dirname, '..', '..', 'shared')));

// List products, optionally filtered with ?category=books
app.get('/api/products', (req, res) => {
  const category = req.query.category.toLowerCase();
  if (category === 'all') {
    return res.json(products);
  }
  const matches = products.filter((p) => p.category.toLowerCase() === category);
  res.json(matches);
});

app.listen(PORT, () => {
  console.log(`Level 05 running at http://localhost:${PORT}`);
});
