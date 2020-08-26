export class DomEventListener {
  constructor($root, listeners) {
    this.$root = $root,
    this.listeners = listeners || [];
  }

  initDomListeners() {
    console.log(this.$root);
    console.log(this.listeners);
  }
  removeDomListeners() {

  }
}