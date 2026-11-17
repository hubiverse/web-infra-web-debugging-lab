# Level 11: No Orders Yet?

**Run:** `npm run level11`, then open http://localhost:3000

## What should happen
After I click "Log in", the page shows my four orders.

## What happens instead
I click "Log in" and the page says "No orders yet." Nothing in the Console. Nothing in the terminal. It just looks empty.

## Your task
Find the bug. Prove it with evidence. Fix it with the smallest change.

## Tools to try
- DevTools Network tab: the request to `/api/orders`, its status and request headers
- DevTools Application tab: Local Storage
- `python tools/probe.py GET http://localhost:3000/api/orders --header "Authorization: Bearer demo-token-123"`

<details>
<summary>Hint 1</summary>
When nothing complains, the Network tab is the source of truth. What status did `/api/orders` really return? And why did the page not tell you?
</details>

<details>
<summary>Hint 2</summary>
Open the request headers of that call. What token did the page send? Then open Local Storage and see what was saved. There may be more than one problem here.
</details>
