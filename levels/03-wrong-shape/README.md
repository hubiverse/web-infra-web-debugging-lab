# Level 03: Where Did the Users Go?

**Run:** `npm run level03`, then open http://localhost:3000

## What should happen
The page shows how many users there are, then a card for each person.

## What happens instead
The page is empty. No count, no cards. There is a red error in the Console.

## Your task
Find the bug. Prove it with evidence. Fix it with the smallest change.

## Tools to try
- DevTools Console: read the error and click the file link
- DevTools Network tab: the Preview and Response for the request
- `console.log`

<details>
<summary>Hint 1</summary>
The request worked. Check its status in the Network tab. So the problem is in what the page does with the answer.
</details>

<details>
<summary>Hint 2</summary>
Open the Preview for `/api/users` and expand it. Where exactly do the users live? Now compare that path with the one `app.js` uses.
</details>
