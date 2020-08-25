export class Excel {
  constructor(selector, {components}) {
    this.$el = document.querySelector(selector);
    this.components = components || [];
  }
  render() {
    console.log(this.components);
  }
}