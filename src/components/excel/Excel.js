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
  constructor({components}, store) {
    this.components = components || [];
    this.store = store;
    this.emmiter = new Emmiter();
    this.subscriber = new StoreSubscriber(this.store);
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    const componentOptions = {
      emmiter: this.emmiter,
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

  init() {
    this.subscriber.subscribeToStore(this.components);
    this.components.forEach((component) => component.init());
  }
  destroy() {
    this.subscriber.unsubscribeFromStore();
    this.components.forEach((component) => component.destroy());
  }
}