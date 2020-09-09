import {isEqual} from './utils';

export class StoreSubscriber {
  constructor(store) {
    this.store = store;
    this.prevState = {};
    this.unsub = null;
  }
  subscribeToStore(components) {
    this.prevState = this.store.getState();

    this.unsub = this.store.subscribe((state) =>{
      Object.keys(state).forEach((key) => {
        if (!isEqual(this.prevState[key], state[key])) {
          components.forEach((component) => {
            if (component.subscribe.includes(key)) {
              component.changeStore({[key]: state[key]});
            }
          });
        }
      });
      this.prevState = this.store.getState();
    });
  }
  unsubscribeFromStore() {
    this.unsub.unsubscribe();
  }
}