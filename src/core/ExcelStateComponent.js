import {ExcelComponent} from './ExcelComponent';

export class ExcelStateComponent extends ExcelComponent {
  constructor(...args) {
    super(...args);
  }
  get templete() {
    return '';
  }
  initState(inittialState) {
    this.state = inittialState;
  }

  setState(newState) {
    this.state = {...this.state, ...newState};
    this.$root.html(this.templete);
  }
}