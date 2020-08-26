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
}


export const $ = ($el) =>{
  return new Dom($el);
};


$.create = (tagName, className = '') => {
  const el = document.createElement(tagName);
  el.classList.add(className);
  return $(el);
};