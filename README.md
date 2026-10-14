# Ctrl Fixer for Microsoft Teams

Microsoft Teams web grabs Ctrl+1-9 and Alt+1-9, so you can't jump between browser tabs while Teams is focused. This extension stops Teams from seeing those keys, so the browser handles them.

The whole thing is [`extension/content.js`](extension/content.js):

```js
window.addEventListener('keydown', (e) => {
  const mods = e.ctrlKey + e.metaKey + e.altKey;
  if (mods === 1 && !e.shiftKey && /^Digit[1-9]$/.test(e.code)) {
    e.stopImmediatePropagation();
  }
}, true);
```

No permissions, no network, no data. It runs only on `teams.microsoft.com` and `teams.cloud.microsoft`.

## Install from source (Chrome / Edge)

1. Open `chrome://extensions` (or `edge://extensions`).
2. Turn on **Developer mode**.
3. Click **Load unpacked** and pick the `extension` folder.
4. Reload your Teams tab.

## Build the store zip

```sh
./build.sh   # -> dist/ctrl-fixer-teams-<version>.zip
```

Bump `version` in `extension/manifest.json` before each store upload.

Not affiliated with Microsoft. Microsoft Teams is a trademark of Microsoft Corporation.
