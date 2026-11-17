# Level 06: But I Filled Both Fields

**Run:** `npm run level06`, then open http://localhost:3000

## What should happen
I type a name and an email, click "Add user", and the new person appears in the list.

## What happens instead
I fill in both fields, click "Add user", and the page says "Error: name and email are required". But I filled in both fields!

## Your task
Find the bug. Prove it with evidence. Fix it with the smallest change.

## Tools to try
- DevTools Network tab: Headers and Payload for the POST
- `python tools/probe.py POST http://localhost:3000/api/users '{"name": "Ama", "email": "ama@example.com"}'`
- The terminal

<details>
<summary>Hint 1</summary>
Try the same POST with `probe.py`. Does it work? If it does, the server can add users. So what is different about the browser's request?
</details>

<details>
<summary>Hint 2</summary>
Put the request headers from `probe.py` next to the Request Headers in the Network tab. Look at every header, not only the body. How does the server know what kind of body it received?
</details>
