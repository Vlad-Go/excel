import {ExcelComponent} from '../../core/ExcelComponent';
import {getTableTemplete} from './table.template';
import {resizeHandler} from './table.resize';
import {select} from './Table-selection';


export class Table extends ExcelComponent {
  // static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'click']
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
  onClick(e) {
    if (e.target.classList.contains('excel__table-data-cell')) {
      select(e);
    }
  }
}