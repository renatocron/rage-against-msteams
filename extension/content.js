window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && /^Digit[1-9]$/.test(e.code)) {
    e.stopImmediatePropagation();
  }
}, true);
