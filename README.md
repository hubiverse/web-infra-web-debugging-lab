# Web Debugging Lab

Eleven small web apps. Each one is broken. Some are broken twice.

Your job is to find the bug, prove it, and fix it.

Do not guess. Collect evidence. A fix you cannot explain is not a fix.

---

## Setup

You need:
- Node.js 18 or newer
- Python 3.9 or newer
- Chrome, Edge, or another Chromium browser
- VS Code

```bash
git clone <repo-url>
cd web-debugging-lab
npm install
pip install -r requirements.txt
```

---

## Running a level

```bash
npm run level01
```

Open http://localhost:3000 in the browser.

Stop the server with `Ctrl+C` before you start the next level. Every level uses port 3000.

Each level has its own `README.md`. It tells you what should happen, what happens instead, and which tools to try. Hints are hidden. Open them only when you are stuck.

---

## The levels

| # | Level | What you see | Start with |
|---|---|---|---|
| 01 | The Server Will Not Start | Crash in the terminal | Terminal |
| 02 | Could Not Load Users | An error message on the page | Network tab |
| 03 | Where Did the Users Go? | Empty page, red error in console | Network tab, Console |
| 04 | Not a Function? | Empty page, red error in console | Console, Sources |
| 05 | Works Sometimes | The list breaks, but only sometimes | Network tab, Terminal |
| 06 | But I Filled Both Fields | The form says fields are missing | Network tab, probe.py |
| 07 | Nobody Is Found | Every user is "not found" | probe.py, VS Code debugger |
| 08 | Works in Python, Fails in the Browser | Network error | Console, probe.py |
| 09 | Half the Team Is Missing | Only some users appear | Console, the JSON data |
| 10 | Almost the Right Total | The cart total looks odd | The JSON data, Console |
| 11 | No Orders Yet? | No errors anywhere. Still wrong. | Network tab, Application tab |

The levels get harder as you go. Do them in order.

---

## The method

Use the same steps every time.

1. **Reproduce.** Make the bug happen on purpose, every time.
2. **Read the error.** All of it. The file name and line number matter.
3. **Find the layer.** Where does it break? (See below.)
4. **Make one hypothesis.** "I think X, because Y."
5. **Change one thing.** Then test again.
6. **Verify.** Check that it works. Check that nothing else broke.

### The layers

A web request moves through these layers. A bug lives in one of them.

```
Browser page  ->  app.js  ->  HTTP request  ->  server.js  ->  data/*.json
                                                    |
Browser page  <-  app.js  <-  HTTP response <-------+
```

Ask these questions in order:

1. Did the server start? Check the **terminal**.
2. Did the browser send a request? Check the **Network tab**.
3. What status code came back? 200, 400, 401, 404, 500?
4. What does the response body really look like? Check **Preview** and **Response**.
5. Does `app.js` read that response correctly? Check the **Console** and use **breakpoints**.

### Status codes you will meet

| Code | Meaning | Usually means |
|---|---|---|
| 200 / 201 | OK / Created | The server is happy. If the page is still wrong, look at the client. |
| 400 | Bad Request | The server did not like what you sent. Check the payload and headers. |
| 401 | Unauthorized | Missing or wrong credentials. |
| 404 | Not Found | Wrong URL, or the thing does not exist. |
| 500 | Server Error | The server crashed. Check the terminal. |

---

## Your tools

### 1. The terminal

Server errors print here. Read the first line of the error and the first line that points to a file in this repo.

### 2. Chrome DevTools

Open with `F12`, or `Cmd+Option+I` on Mac.

- **Console.** JavaScript errors and `console.log` output. Click the file link to jump to the line.
- **Network.** Every request the page makes. Click a row to see:
  - **Headers.** The URL, method, status code, request headers, and response headers.
  - **Payload.** What the page sent.
  - **Preview.** The response as a tree. Good for JSON.
  - **Response.** The raw response text.
- **Sources.** Click a line number to set a breakpoint. Reload. The code pauses there. Hover over variables to see their values.
- **Application.** Look at Local Storage and other things the page saved.

Tips:
- Open DevTools before you reload the page, so the Network tab records everything.
- Tick **Disable cache** in the Network tab.

### 3. probe.py

Calls the API directly from Python. There is no browser and no `app.js`. This lets you test the server on its own.

```bash
# GET
python tools/probe.py GET http://localhost:3000/api/users

# POST with a JSON body
python tools/probe.py POST http://localhost:3000/api/users '{"name": "Ama", "email": "ama@example.com"}'

# Add a header
python tools/probe.py GET http://localhost:3000/api/orders --header "Authorization: Bearer abc123"
```

It prints the request headers it sent, then the status code, the response headers, and the body.

The rule of thumb:
- **The API works in probe.py but not in the browser?** The bug is likely in `app.js`, or in a rule that only browsers follow.
- **The API fails in probe.py too?** The bug is on the server, or in the data.

### 4. VS Code debugger

Use this for server bugs.

1. Stop any running server.
2. Open the **Run and Debug** panel.
3. Choose **Debug a level** and press the green play button.
4. Pick the level.
5. Click left of a line number in `server.js` to set a breakpoint.
6. Use the page. The server pauses at your breakpoint. Hover over variables to inspect them.

### 5. console.log

Simple and fast. Log the value, and log its type:

```js
console.log('body is', body);
console.log('type is', typeof body.count);
```

Remove your logs when you are done.

---

## Debug log

For each level, copy the template in `DEBUG_LOG.md` and fill it in. Keep it short. The evidence section matters most.

---

## Rules

- Find the line. Do not rewrite the whole file.
- Change one thing at a time.
- Explain why the fix works. "It works now" is not an explanation.
- Before you fix anything, ask yourself what else could break because of this bug.
