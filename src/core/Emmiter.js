export class Emmiter {
  constructor() {
    this.listeners = [];
  }
  emmit(event, args) {
    this.listeners[event](...args);
  }
  subscribe(event, fn) {
    this.listeners[event] = fn;
    return () => {
      this.listeners = this.listeners.filter((listener)=> listener != fn);
    };
  }
}