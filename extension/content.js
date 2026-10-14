window.addEventListener('keydown', (e) => {
  const mods = e.ctrlKey + e.metaKey + e.altKey;
  if (mods === 1 && !e.shiftKey && /^Digit[1-9]$/.test(e.code)) {
    e.stopImmediatePropagation();
  }
}, true);
