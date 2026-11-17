# Level 05: Works Sometimes

**Run:** `npm run level05`, then open http://localhost:3000

## What should happen
On load, the shop shows all 8 products. Picking a category shows only that category. Picking "All" shows everything again.

## What happens instead
On load the list is empty and the Console has a red error about JSON. If I pick "Books" it works. If I pick "All" again, it breaks again.

## Your task
Find the bug. Prove it with evidence. Fix it with the smallest change.

## Tools to try
- DevTools Network tab: compare a request that works with one that fails
- The terminal where the server runs
- DevTools Console

<details>
<summary>Hint 1</summary>
The Console error is a symptom. Open the failing request in the Network tab. What status came back, and what does the Response really contain?
</details>

<details>
<summary>Hint 2</summary>
Look at the terminal after the failing request. Then compare the URL of the request that works with the one that fails. What is different, and how does `server.js` handle that difference?
</details>
