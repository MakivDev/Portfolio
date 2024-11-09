function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
}

function addClassOnVisible() {
  const divs = document.querySelectorAll('div');
  
  divs.forEach(div => {
    if (isInViewport(div)) {
      switch (div.id) {
        case 'line-limit-project':
          div.classList.add('extension-projects');
          break;
        case 'line-limit-skills':
          div.classList.add('extension-skils');
          break;
        case 'line-limit-about':
          div.classList.add('extension-about');
          break;
        case 'line-limit-contacts':
          div.classList.add('extension-contacts');
          break;
      }
    }
  });
}

window.addEventListener('scroll', addClassOnVisible);
window.addEventListener('load', addClassOnVisible);
