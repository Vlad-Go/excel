import {ExcelStateComponent} from '../../core/ExcelStateComponent';
import {getTolbarTempete} from './tolbar.templete';
import {$} from '../../core/Dom';
import {initialState} from '../../vars';

export class Toolbar extends ExcelStateComponent {
  // static className = 'excel__toolbar'
  constructor($root, options) {
    super($root, {
      name: 'toolbar',
      listeners: ['click'],
      subscribe: ['currentStyle'],
      ...options
    });
  }
  prepare() {
    this.initState(initialState);
  }
  get templete() {
    return getTolbarTempete(this.state);
  }
  toHTML() {
    return this.templete;
  }
  changeStore({currentStyle}) {
    this.setState(currentStyle);
  }
  onClick(e) {
    const $target = $(e.target);
    if ($target.data('type') === 'button') {
      const style = JSON.parse($target.data('value'));
      this.$emmit('applyStyle:tolbar', [style]);
    }
  }
}