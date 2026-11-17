const API_URL = 'http://localhost:3000';

const select = document.getElementById('city');
const card = document.getElementById('weather');
const message = document.getElementById('message');

// Load the weather for one city
async function loadWeather(city) {
  message.textContent = '';
  card.innerHTML = '<span class="empty">Loading...</span>';

  try {
    const res = await fetch(`${API_URL}/api/weather?city=${city}`);
    if (!res.ok) {
      card.innerHTML = '';
      message.textContent = `Could not load the weather (status ${res.status}).`;
      return;
    }
    const report = await res.json();
    card.innerHTML = `<div class="name">${report.city}</div>
      <div class="temp">${report.tempC}°C</div>
      <div class="meta">${report.condition}</div>
      <div class="meta">${report.updated ? `Updated ${report.updated.slice(11)} local time` : 'Sample data (live weather unavailable)'}</div>`;
  } catch (err) {
    console.error(err);
    card.innerHTML = '';
    message.textContent = 'Network error. Could not reach the weather service.';
  }
}

select.addEventListener('change', () => loadWeather(select.value));

// Show the first city when the page opens
loadWeather(select.value);
