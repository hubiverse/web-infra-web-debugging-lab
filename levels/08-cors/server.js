const express = require('express');
const path = require('path');

const API_PORT = 3000;
const PAGE_PORT = 5500;

// Coordinates for Open-Meteo, plus sample values for when it cannot be reached
const cities = {
  kigali: { city: 'Kigali', latitude: -1.9441, longitude: 30.0619, sample: { tempC: 24, condition: 'Partly cloudy' } },
  accra: { city: 'Accra', latitude: 5.6037, longitude: -0.187, sample: { tempC: 30, condition: 'Clear sky' } },
  lagos: { city: 'Lagos', latitude: 6.5244, longitude: 3.3792, sample: { tempC: 29, condition: 'Rain showers' } },
};

// Turn an Open-Meteo weather code (WMO) into a short description
function describe(code) {
  if (code === 0) return 'Clear sky';
  if (code <= 3) return 'Partly cloudy';
  if (code <= 48) return 'Fog';
  if (code <= 57) return 'Drizzle';
  if (code <= 67) return 'Rain';
  if (code <= 82) return 'Rain showers';
  return 'Thunderstorm';
}

// The weather API: asks Open-Meteo for the current weather in one city
const api = express();

api.get('/api/weather', async (req, res) => {
  // Live data: browsers should always ask again instead of using a cached copy
  res.set('Cache-Control', 'no-store');
  const place = cities[String(req.query.city || '').toLowerCase()];
  if (!place) {
    return res.status(404).json({ error: 'Unknown city' });
  }
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}` +
    '&current=temperature_2m,weather_code&timezone=auto';
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error(`Open-Meteo answered ${response.status}`);
    const data = await response.json();
    const { temperature_2m: tempC, weather_code: code, time } = data.current;
    res.json({ city: place.city, tempC, condition: describe(code), updated: time });
  } catch (err) {
    console.error(`Weather service failed (${err.message}), sending sample data`);
    res.json({ city: place.city, ...place.sample, updated: null });
  }
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
