let theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    setTheme(mode, true);
  });

  themeDots[i].addEventListener('mouseover', function () {
    let mode = this.dataset.mode;
    setTheme(mode, false);
  });

  themeDots[i].addEventListener('mouseleave', function () {
    setTheme(theme, false);
  });
}

function setTheme(mode, save) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = '/public/css/default.css';
  }

  if (mode == 'blue') {
    document.getElementById('theme-style').href = '/public/css/blue.css';
  }

  if (mode == 'green') {
    document.getElementById('theme-style').href = '/public/css/green.css';
  }

  if (mode == 'purple') {
    document.getElementById('theme-style').href = '/public/css/purple.css';
  }

  if (save) {
    localStorage.setItem('theme', mode);
    theme = localStorage.getItem('theme');
  }
}

anime
  .timeline({ loop: true })
  .add({
    targets: '.ml5 .line',
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: 'easeInOutExpo',
    duration: 700,
  })
  .add({
    targets: '.ml5 .line',
    duration: 600,
    easing: 'easeOutExpo',
    translateY: (el, i) => -0.625 + 0.625 * 2 * i + 'em',
  })
  .add({
    targets: '.ml5 .ampersand',
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: 'easeOutExpo',
    duration: 600,
    offset: '-=600',
  })
  .add({
    targets: '.ml5 .letters-left',
    opacity: [0, 1],
    translateX: ['0.5em', 0],
    easing: 'easeOutExpo',
    duration: 600,
    offset: '-=300',
  })
  .add({
    targets: '.ml5 .letters-right',
    opacity: [0, 1],
    translateX: ['-0.5em', 0],
    easing: 'easeOutExpo',
    duration: 600,
    offset: '-=600',
  })
  .add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000,
  });
