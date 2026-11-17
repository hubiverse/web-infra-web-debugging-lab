# Level 04: Not a Function?

**Run:** `npm run level04`, then open http://localhost:3000

## What should happen
The page shows "Loaded 6 users" under the heading, then a card for each person.

## What happens instead
The page is empty and the Console says something is "not a function". But I am calling it on the users, which should be a list.

## Your task
Find the bug. Prove it with evidence. Fix it with the smallest change.

## Tools to try
- DevTools Console: read the error and click the file link
- DevTools Sources: set a breakpoint and hover over variables
- `console.log`

<details>
<summary>Hint 1</summary>
Do not trust the variable name. Log the variable itself, just before the line that fails. What is it really?
</details>

<details>
<summary>Hint 2</summary>
Look at every function call on the way from `fetch` to that line. Which ones give you their answer right away, and which ones give you a promise of an answer later?
</details>
