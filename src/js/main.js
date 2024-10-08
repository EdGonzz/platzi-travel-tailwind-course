const $HtmlElement = document.querySelector('html');
const $DarkModeNav = document.querySelector('#dark');
const $DarkModeTap = document.querySelector('#dark-sm');


function toggleDarkMode() {
  $HtmlElement.classList.toggle('dark');
  $DarkModeNav.classList.toggle('active');
  $DarkModeTap.classList.toggle('active');
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toggleDarkMode();
}

$DarkModeNav.addEventListener('click', () => {
  if (!document.startViewTransition) {
    toggleDarkMode();
    return;
  }

  document.startViewTransition(() => toggleDarkMode())
});

$DarkModeTap.addEventListener('click', () => {
  if (!document.startViewTransition) {
    toggleDarkMode();
    return;
  } 
  
  document.startViewTransition(() => toggleDarkMode())
});
