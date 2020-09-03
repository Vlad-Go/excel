import {$} from '../../core/Dom';
import {Emmiter} from '../../core/Emmiter';

// Temp
const classNames = [
  'excel__header',
  'excel__toolbar',
  'excel__formula',
  'excel__table'
];

export class Excel {
  constructor(selector, {components}) {
    this.$el = $(selector);
    this.components = components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    const componentOptions = {
      emmiter: new Emmiter()
    };

    this.components = this.components.map((Component, index) => {
      const $el = $.create('div', classNames[index]);
      const component = new Component($el, componentOptions);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    this.components.forEach((component) => component.init());
  }
  destroy() {
    this.components.forEach((component) => component.destroy());
  }
}