import {DomEventListener} from './DomEventListener';

export class ExcelComponent extends DomEventListener {
  constructor($root, options = {}) {
    super($root, options.listeners, options.name);
  }
  toHTML() {
    return ' ';
  }

  prepare() {
    console.log('prepare');
  }

  init() {
    this.initDOMListeners();
    console.log('init');
  }
  destroy() {
    this.removeDOMListeners();
  }
}