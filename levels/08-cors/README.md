# Level 08: Works in Python, Fails in the Browser

**Run:** `npm run level08`, then open http://localhost:5500

## What should happen
The page shows the current, live weather for the chosen city: temperature, condition, and when it was last updated. The data comes from the free Open-Meteo service. Without internet, the page shows sample data instead.

## What happens instead
The page says "Network error. Could not reach the weather service." But when I call the API with `probe.py`, I get the weather with status 200.

## Your task
Find the bug. Prove it with evidence. Fix it with the smallest change.

## Tools to try
- DevTools Console: read the whole red message
- `python tools/probe.py GET "http://localhost:3000/api/weather?city=Kigali"`
- DevTools Network tab: response headers

<details>
<summary>Hint 1</summary>
Look at the address bar, then at the URL the page calls. They are not the same origin. Does the browser care about that?
</details>

<details>
<summary>Hint 2</summary>
The server did answer. Read the Console message word for word. Which header is it looking for, and who has to send that header?
</details>
