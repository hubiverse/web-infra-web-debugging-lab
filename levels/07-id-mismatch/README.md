# Level 07: Nobody Is Found

**Run:** `npm run level07`, then open http://localhost:3000

## What should happen
Clicking a person in the list shows their name, email, and city in the Details panel.

## What happens instead
The list loads fine. But every person I click says "User not found".

## Your task
Find the bug. Prove it with evidence. Fix it with the smallest change.

## Tools to try
- `python tools/probe.py GET http://localhost:3000/api/users/3`
- VS Code breakpoints: Run panel, choose the level, then click a user
- `console.log` with `typeof`

<details>
<summary>Hint 1</summary>
First decide: is the page asking for the right thing, and is the server answering it correctly? `probe.py` takes the page out of the picture.
</details>

<details>
<summary>Hint 2</summary>
Pause the server inside the route for one user. Hover over the value that came from the URL and over a user's id. They print the same. Are they the same?
</details>
