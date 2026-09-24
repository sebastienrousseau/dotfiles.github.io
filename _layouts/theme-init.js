/*!
 * Runs before first paint so a stored choice applies without a flash of the
 * wrong palette.
 *
 * Only an explicit choice is stamped onto <html>. With nothing stored the
 * attribute is deliberately left off so the stylesheet's prefers-color-scheme
 * block decides and the page follows the OS. The previous version always
 * stamped a value, which meant "system" could never be the current state:
 * the mode control had no way to express it.
 */
(function () {
  var root = document.documentElement;
  root.classList.remove("no-js");
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      root.setAttribute("data-theme", saved);
    }
  } catch (e) {
    /* Private browsing or blocked storage: follow the OS. */
  }
})();
