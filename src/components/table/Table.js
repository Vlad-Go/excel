import {ExcelComponent} from '../../core/ExcelComponent';
import {getTableTemplete} from './table.template';


export class Table extends ExcelComponent {
  // static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['input', 'click']
    });
  }
  toHTML() {
    return getTableTemplete();
  }
  onClick(e) {
    console.log(this.$root);
    console.log(e.target);
  }
  onInput(e) {
    console.log(e.target);
  }
}