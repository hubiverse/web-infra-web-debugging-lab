# Level 09: Half the Team Is Missing

**Run:** `npm run level09`, then open http://localhost:3000

## What should happen
The page shows a card for each of the six people, with their name, email, and city.

## What happens instead
Only three people appear. The others are gone. There is a red error in the Console.

## Your task
Find the bug. Prove it with evidence. Fix it with the smallest change.

## Tools to try
- DevTools Console: read the error and click the file link
- The JSON data: `data/users.json`, or the Network tab Preview
- DevTools Sources: a breakpoint inside the loop

<details>
<summary>Hint 1</summary>
Some cards appear and then they stop. What does that tell you about the loop? Which person was it working on when it stopped?
</details>

<details>
<summary>Hint 2</summary>
Find that person in the raw JSON. Compare their record with the ones that worked. Then decide where the change belongs.
</details>
