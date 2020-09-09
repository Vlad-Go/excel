import {ExcelComponent} from '../../core/ExcelComponent';
import {getTolbarTempete} from './tolbar.templete';
import { $ } from '../../core/Dom';

export class Toolbar extends ExcelComponent {
  // static className = 'excel__toolbar'
  constructor($root, options) {
    super($root, {
      name: 'toolbar',
      listeners: ['click'],
      subscribe: [''],
      ...options
    });
  }
  toHTML() {
    return getTolbarTempete();
  }
  onClick(e) {
    console.log($(e.target).data('value'));
  }
}