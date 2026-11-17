# Level 10: Almost the Right Total

**Run:** `npm run level10`, then open http://localhost:3000

## What should happen
The cart shows each item and its line total, then the subtotal, shipping, and a correct total.

## What happens instead
The line totals and the subtotal look fine. But the total looks strange, like two numbers stuck together. There is no error anywhere.

## Your task
Find the bug. Prove it with evidence. Fix it with the smallest change.

## Tools to try
- The JSON data: Network tab Preview or Response for `/api/cart`
- DevTools Console: `typeof`
- DevTools Sources: a breakpoint where the total is computed

<details>
<summary>Hint 1</summary>
No error does not mean no problem. Do the math yourself. What should the total be? What does the page show?
</details>

<details>
<summary>Hint 2</summary>
Look closely at each value in the raw JSON, including the quotes. Then check the type of each value that goes into the total.
</details>
