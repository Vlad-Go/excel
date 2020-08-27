import {DomEventListener} from './DomEventListener';

export class ExcelComponent extends DomEventListener {
  constructor($root, options = {}) {
    super($root, options.listeners, options.name);
  }
  toHTML() {
    return ' ';
  }

  init() {
    this.initDOMListeners();
  }
  destroy() {
    this.removeDOMListeners();
  }
}