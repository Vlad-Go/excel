import {ExcelStateComponent} from '../../core/ExcelStateComponent';
import {getTolbarTempete} from './tolbar.templete';
import {$} from '../../core/Dom';
import {initialState} from '../../redux/initialState';

export class Toolbar extends ExcelStateComponent {
  // static className = 'excel__toolbar'
  constructor($root, options) {
    super($root, {
      name: 'toolbar',
      listeners: ['click'],
      subscribe: [],
      ...options
    });
  }
  prepare() {
    const initialState = {
      textAlign: 'left',
      fontWeight: 'normal',
      textDecoration: 'none',
      fontStyle: 'normal'
    };
    this.initState(initialState);
  }
  get templete() {
    return getTolbarTempete(this.state);
  }
  toHTML() {
    return this.templete;
  }
  onClick(e) {
    const style = $(e.target).data('value');
    this.setState(JSON.parse(style));
    console.log(this.state);
  }
}