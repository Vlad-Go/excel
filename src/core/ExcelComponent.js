import {DomEventListener} from './DomEventListener';

export class ExcelComponent extends DomEventListener {
  constructor($root, options = {}) {
    super($root, options.listeners, options.name);
    this.emmiter = options.emmiter;
    this.unsucribers = [];
    this.subscribe =options.subscribe;
    this.store = options.store;
    this.prepare();
  }

  $emmit(event, args) {
    this.emmiter.emmit(event, args);
  }
  $subscribe(event, fn) {
    const unsub = this.emmiter.subscribe(event, fn);
    this.unsucribers.push(unsub);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  changeStore(store) {
    console.log(store);
  }

  toHTML() {
    return ' ';
  }
  prepare() {
  }
  init() {
    this.initDOMListeners();
  }
  destroy() {
    this.removeDOMListeners();
    this.unsucribers.forEach((unsub) => unsub());
  }
}