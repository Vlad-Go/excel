import {ExcelComponent} from '../../core/ExcelComponent';
import {getTableTemplete} from './table.template';
import {resizeHandler} from './table.resize';
import {TableSelection} from './Table-selection';
import {$} from '../../core/Dom';
import {shouldResize, isCell, isCellGroup} from './table.functions';


const keys = [
  'ArrowUp',
  'ArrowDown',
  'ArrowRight',
  'ArrowLeft',
  'Enter',
  'Tab'
];

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
  onKeydown(e) {
    if (keys.includes(e.code)) {
      const currentCords = this.selection.$current.cellId();
      const {row, col} = currentCords;
      e.preventDefault();
      const MIN_VALUE = 0;

      switch (e.code) {
        case 'ArrowUp': {
          if (row > MIN_VALUE) {
            const selector = `[data-id="${row-1}:${col}"]`;
            const $next = this.$root.find(selector);
            this.selection.select($next);
          }
          break;
        }
        case 'Enter':
        case 'ArrowDown': {
          const selector = `[data-id="${row+1}:${col}"]`;
          const $next = this.$root.find(selector);
          this.selection.select($next);
          break;
        }
        case 'Tab':
        case 'ArrowRight': {
          const selector = `[data-id="${row}:${col+1}"]`;
          const $next = this.$root.find(selector);
          this.selection.select($next);
          break;
        }
        case 'ArrowLeft': {
          if (col > MIN_VALUE) {
            const selector =`[data-id="${row}:${col-1}"]`;
            const $next = this.$root.find(selector);
            this.selection.select($next);
          }
          break;
        }
      }
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