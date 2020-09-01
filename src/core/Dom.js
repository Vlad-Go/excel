class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
    document.querySelector(selector) :
    selector;
  }

  html(string) {
    if (typeof string === 'string') {
      this.$el.innerHTML = string;
    } else {
      return this.$el.outerHTML.trim();
    }
  }

  clear() {
    this.html('');
    return this;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  find(selector) {
    return $(this.$el.querySelector(selector));
  }

  closest(selector) {
    return $(this.$el.closest(selector));
  }
  data(type) {
    return this.$el.dataset[type];
  }

  css(styles = {}) {
    Object.keys(styles).forEach((key)=>{
      this.$el.style[key] = styles[key];
    });
  }

  width() {
    return this.$el.clientWidth;
  }
  height() {
    return this.$el.clientHeight;
  }
  addClass(className) {
    this.$el.classList.add(className);
  }
  removeClass(className) {
    this.$el.classList.remove(className);
  }
  cellId(i) {
    return parseInt(this.$el.dataset.id.split(':')[i]);
  }
}


export const $ = ($el) =>{
  return new Dom($el);
};


$.create = (tagName, className = '') => {
  const el = document.createElement(tagName);
  el.classList.add(className);
  return $(el);
};