const express = require('express');
const path = require('path');

const API_PORT = 3000;
const PAGE_PORT = 5500;

const weather = {
  kigali: { city: 'Kigali', tempC: 24, condition: 'Partly cloudy' },
  accra: { city: 'Accra', tempC: 30, condition: 'Sunny' },
  lagos: { city: 'Lagos', tempC: 29, condition: 'Light rain' },
};

// The weather API
const api = express();

api.get('/api/weather', (req, res) => {
  const key = String(req.query.city || '').toLowerCase();
  const report = weather[key];
  if (!report) {
    return res.status(404).json({ error: 'Unknown city' });
  }
  res.json(report);
});

api.get('/', (req, res) => {
  res.status(404).type('text').send('API only. Open http://localhost:5500');
});

// The web page
const page = express();
page.use(express.static(path.join(__dirname, 'public')));
page.use('/shared', express.static(path.join(__dirname, '..', '..', 'shared')));

api.listen(API_PORT, () => {
  page.listen(PAGE_PORT, () => {
    console.log(`Level 08 page at http://localhost:${PAGE_PORT}, API at http://localhost:${API_PORT}`);
  });
});
