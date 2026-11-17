# Level 01: The Server Will Not Start

**Run:** `npm run level01`, then open http://localhost:3000

## What should happen
The server starts and the page shows the six people on the team, with their names and emails.

## What happens instead
I run `npm run level01` and the terminal prints a big red error. The server stops right away, so the page will not even open.

## Your task
Find the bug. Prove it with evidence. Fix it with the smallest change.

## Tools to try
- The terminal: read the first line of the error, then find the first line that points to a file in this level
- VS Code: open the file the error points to and look for red underlines

<details>
<summary>Hint 1</summary>
The page is not the problem yet. The server never got far enough to serve it. Which line in `server.js` was running when it stopped?
</details>

<details>
<summary>Hint 2</summary>
`JSON.parse` is much stricter than JavaScript. Look at the exact position the error message gives you. When that error is gone, run the server again. Is it really done?
</details>
