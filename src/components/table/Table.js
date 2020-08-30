import {ExcelComponent} from '../../core/ExcelComponent';
import {getTableTemplete} from './table.template';
import {resizeHandler} from './table.resize';


export class Table extends ExcelComponent {
  // static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    });
  }
  toHTML() {
    return getTableTemplete(50);
  }
  onMousedown(e) {
    if (e.target.dataset.resize) {
      resizeHandler(e, this.$root);
    }
  }
}