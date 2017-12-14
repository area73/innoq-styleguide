(function () {
'use strict';

if(typeof global === "undefined" && typeof window !== "undefined") {
	window.global = window;
}

class InfoBox extends HTMLElement {
  connectedCallback () {
    this.classList.add('enhanced');
    this.setAttribute('open', 'false');
    this.contentHeight = `${this.content.clientHeight}px`;
    this.content.style.height = 0;
    this.teaser.onclick = this.toggle.bind(this);
  }

  get content () {
    return this.querySelector('.infobox__content')
  }

  get teaser () {
    return this.querySelector('.infobox__teaser')
  }

  toggle () {
    this.open = !this.open;

    if (this.open) {
      this.content.style.height = this.contentHeight;
    } else {
      this.content.style.height = 0;
    }
  }

  get open () {
    return this.getAttribute('open') === 'true'
  }

  set open (value) {
    this.setAttribute('open', value.toString());
  }
}

class NavbarToggler extends HTMLElement {
  connectedCallback () {
    this.classList.add('enhanced');
    this.onclick = this.toggle.bind(this);
  }

  toggle () {
    this.open = !this.open;
    const targets = Array.from(this.target);
    targets.forEach((t) => t.classList.toggle('collapse'));
  }

  get target () {
    const selector = this.getAttribute('target');
    return document.querySelectorAll(selector)
  }

  get open () {
    return this.getAttribute('open') === ''
  }

  set open (opened) {
    if (opened) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }
}

customElements.define('info-box', InfoBox);
customElements.define('navbar-toggler', NavbarToggler);

}());
