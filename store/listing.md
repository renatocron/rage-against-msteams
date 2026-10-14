# Store listing (Chrome Web Store / Edge Add-ons)

## Name
Ctrl Fixer for Microsoft Teams

## Summary (max 132 chars, same as manifest description)
Lets Ctrl+1-9 switch browser tabs while Microsoft Teams web is open. Not affiliated with Microsoft.

## Category
Productivity (or Accessibility)

## Description
Microsoft Teams on the web captures Ctrl+1 through Ctrl+9 for its own navigation, so the browser shortcut for jumping to a tab stops working while a Teams tab is focused.

This extension gives those shortcuts back to the browser. On Teams pages, Ctrl+1 to Ctrl+9 (Cmd on macOS) switch tabs again, as they do everywhere else.

- No permissions requested
- Runs only on teams.microsoft.com and teams.cloud.microsoft
- Collects no data, makes no network requests
- About five lines of code, open source

Note: Teams' own Ctrl+number shortcuts (switching between Chat, Teams, Calendar, etc.) will no longer work on those pages. Use the sidebar or Ctrl+Shift shortcuts instead.

This extension is not affiliated with, endorsed by, or sponsored by Microsoft. Microsoft Teams is a trademark of Microsoft Corporation.

## Single purpose
Lets Ctrl+1-9 switch browser tabs on Microsoft Teams web instead of being captured by the page.

## Permission justification
None requested. The content script runs only on the two Teams URLs in `matches`.

## Data usage
Collects no user data. Tick nothing in the data categories and certify the three statements (not sold, not used for unrelated purposes, not used for creditworthiness).

## Remote code
No, the extension does not use remote code.

## Assets
- Icon: `extension/icons/icon128.png`
- Small promo tile 440x280: `store/promo-small-440x280.png`
- Screenshot 1280x800: TODO, take one of a Teams tab with the tab strip visible (needs a real Teams session).
