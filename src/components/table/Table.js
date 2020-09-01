import {ExcelComponent} from '../../core/ExcelComponent';
import {getTableTemplete} from './table.template';
import {resizeHandler} from './table.resize';
import {TableSelection} from './Table-selection';
import {$} from '../../core/Dom';
import {shouldResize, isCell, isCellGroup} from './table.functions';


export class Table extends ExcelComponent {
  // static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown']
    });
    this.prepare();
  }
  toHTML() {
    return getTableTemplete(50);
  }
  onMousedown(e) {
    if (shouldResize(e)) {
      resizeHandler(e, this.$root);
    } else if (isCell(e)) {
      this.selection.select($(e.target));
    } else if (isCellGroup(e) ) {
      this.selection.selectGroup($(e.target));
    }
  }
  prepare() {
    this.selection = new TableSelection();
  }
  init() {
    super.init();
    const firstCell = this.$root.find('[data-id="0:0"]');
    this.selection.select(firstCell);
  }

}
// onKeydown(e) {
//   console.log(e);
//   if (e.code === 'ArrowUp') {
//   }
// }
//ArrowUp
//ArrowDown
//ArrowRight
//ArrowLeft
//Enter