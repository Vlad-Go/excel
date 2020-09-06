import {$} from '../../core/Dom';
import {Emmiter} from '../../core/Emmiter';
import {StoreSubscriber} from '../../core/StoreSubscriber';

// Temp
const classNames = [
  'excel__header',
  'excel__toolbar',
  'excel__formula',
  'excel__table'
];

export class Excel {
  constructor(selector, {components}, store) {
    this.$el = $(selector);
    this.components = components || [];
    this.store = store;
    this.subscriber = new StoreSubscriber(this.store);
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    const componentOptions = {
      emmiter: new Emmiter(),
      store: this.store
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
    this.subscriber.subscribe(this.components);
    this.components.forEach((component) => component.init());
  }
  destroy() {
    this.components.forEach((component) => component.destroy());
  }
}