'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  if (!thumbs || !largeImg) {
    return;
  }

  thumbs.addEventListener('click', (targEvent) => {
    let target = targEvent.target;

    if (target.tagName === 'IMG') {
      target = target.closest('a');
    } else if (target.tagName !== 'A') {
      return;
    }

    targEvent.preventDefault();

    const href = target.getAttribute('href');
    const title = target.getAttribute('title');

    if (!href) {
      return;
    }

    const absoluteHref = new URL(href, document.baseURI).href;

    largeImg.src = absoluteHref;
    largeImg.alt = title;

    thumbs
      .querySelectorAll('a')
      .forEach((link) => link.classList.remove('active'));

    target.classList.add('active');
  });
});
