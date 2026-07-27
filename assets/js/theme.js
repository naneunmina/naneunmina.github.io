(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function paintIcon() {
    if (toggle) toggle.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  }
  paintIcon();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      paintIcon();
    });
  }
})();
