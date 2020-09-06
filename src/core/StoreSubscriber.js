export class StoreSubscriber {
  constructor(store) {
    this.store = store;
  }
  subscribe(components) {
     debugger
     components.forEach((component) => component.getState(this.store.getState()));
  }
}