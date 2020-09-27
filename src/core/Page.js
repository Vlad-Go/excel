
export class Page {
  constructor(hash) {
    this.hash = hash;
  }
  getRoot() {
    throw new Error('getRoot should be implemented');
  }
  afterRender() {

  }
  destroy() {

  }
}