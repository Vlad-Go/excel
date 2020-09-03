import {ExcelComponent} from '../../core/ExcelComponent';
import {getTableTemplete} from './table.template';
import {resizeHandler} from './table.resize';
import {TableSelection} from './Table-selection';
import {$} from '../../core/Dom';
import {shouldResize, isCell, isCellGroup, switchKey} from './table.functions';


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
  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options
    });
  }
  toHTML() {
    return getTableTemplete(50);
  }
  onMousedown(e) {
    if (shouldResize(e)) {
      resizeHandler(e, this.$root);
    } else if (isCell(e)) {
      this.selection.select($(e.target));
      // emmit value from cell to formula
      this.$emmit('selectCell:table', [this.selection.$current.text()]);
    } else if (isCellGroup(e) ) {
      this.selection.selectGroup($(e.target));
    }
  }
  onKeydown(e) {
    if (keys.includes(e.code)) {
      e.preventDefault();
      const currentCords = this.selection.$current.cellId();
      const $next = this.$root.find(switchKey(e, currentCords));
      this.selection.select($next);
      // emmit value from cell to formula
      this.$emmit('selectCell:table', [this.selection.$current.text()]);
    }
  }
  onInput(e) {
    // emmit value from cell to formula
    this.$emmit('cellInput:table', [e.target.textContent.trim()]);
  }

  prepare() {
    this.selection = new TableSelection();
    // subscribe to formula value for current cell
    this.$subscribe('input:formula', (formulaText)=>{
      this.selection.group.forEach((cell) => cell.text(formulaText));
    });
    // subscribe to formula done event
    this.$subscribe('input:formula', ()=>{
      this.selection.$current.focus();
    });
  }
  init() {
    super.init();
    const firstCell = this.$root.find('[data-id="0:0"]');
    this.selection.select(firstCell);
  }
}