# Level 02: Could Not Load Users

**Run:** `npm run level02`, then open http://localhost:3000

## What should happen
The page shows the six people on the team, with name, email, and city.

## What happens instead
The page just says "Could not load users." The server is running and the terminal shows no errors.

## Your task
Find the bug. Prove it with evidence. Fix it with the smallest change.

## Tools to try
- DevTools Network tab: reload the page and look for a red row
- The routes in `server.js`

<details>
<summary>Hint 1</summary>
The message on the page hides the details. The Network tab does not. What status code did the request get?
</details>

<details>
<summary>Hint 2</summary>
Compare the Request URL in the Network tab with every route the server defines. Character by character.
</details>
