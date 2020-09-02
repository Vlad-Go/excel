import {DomEventListener} from './DomEventListener';

export class ExcelComponent extends DomEventListener {
  constructor($root, options = {}) {
    super($root, options.listeners, options.name);
    this.emmiter = options.emmiter;
  }

  $emmit(event, args) {
    this.emmiter.emmit(event, args);
  }
  $subscribe(event, fn) {
    this.emmiter.subscribe(event, fn);
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