import {debounce} from '../utils';

export class Proccesor {
  constructor(client, delay = 300) {
    this.client = client;
    this.listen = debounce(this.listen.bind(this), delay);
  }
  listen(state) {
    console.log(state);
    this.client.save(state);
  }
  get() {
    return this.client.get();
  }
}