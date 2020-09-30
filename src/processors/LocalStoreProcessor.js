import {storage} from '../core/utils';

export class LocalStorageProcessor {
  constructor(hash) {
    this.table_id = hash;
  }
  save(state) {
    storage(this.table_id, state);
    return Promise.resolve();
  }
  get() {
    return new Promise((resolve)=> {
      const state = storage(this.table_id);
      setTimeout(() => {
        resolve(state);
      }, 2500);
    });
  }
}