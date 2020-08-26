import {DomEventListener} from './DomEventListener';

export class ExcelComponent extends DomEventListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }
  toHTML() {
    return ' ';
  }

  init() {
    this.initDomListeners();
  }
}