import {capitalize} from './utils';

export class DomEventListener {
  constructor($root, listeners = [], name = '') {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`);
    }
    this.$root = $root,
    this.listeners = listeners,
    this.name = name;
  }

  initDOMListeners() {
    this.listeners.forEach((listener)=>{
      const callback = getMethodName(listener);
      if (!this[callback]) {
        throw new Error(`You don't create callback ${callback} 
                         in ${this.name}`);
      }
      this[callback] = this[callback].bind(this);
      this.$root.on(listener, this[callback]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener)=>{
      const callback = getMethodName(listener);
      this.$root.off(listener, this[callback]);
    });
  }
}


const getMethodName = (eventType) => {
  return 'on' + capitalize(eventType);
};