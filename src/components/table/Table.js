import {ExcelComponent} from '../../core/ExcelComponent';
import {getTableTemplete} from './table.template';
import {resizeHandler} from './table.resize';
import {TableSelection} from './Table-selection';
import {$} from '../../core/Dom';
import {shouldResize, isCell, isCellGroup, switchKey} from './table.functions';
import {resizeAction, cellInputAction} from '../../redux/actions';


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
    return getTableTemplete(50, this.store);
  }
  prepare() {
    this.selection = new TableSelection();
  }
  init() {
    super.init();
    const firstCell = this.$root.find('[data-id="0:0"]');
    this.selection.select(firstCell);

    this.$subscribe('input:formula', (formulaText)=>{
      this.selection.group.forEach(
          (cell) => cell.text() + cell.text(formulaText)
      );
    });
    this.$subscribe('done:formula', ()=>{
      this.selection.$current.focus();
    });
    // this.$emmit('cellInput:table', [this.selection.$current.text()]);
    this.$dispatch(cellInputAction({
      id: this.selection.$current.data('id'),
      text: this.selection.$current.text()
    }));
  }

  onMousedown(e) {
    if (shouldResize(e)) {
      this.resizeTable(e);
    }
    if (isCell(e)) {
      this._selectCell($(e.target));
    } else if (isCellGroup(e) ) {
      this.selection.selectGroup($(e.target));
    }
  }
  onKeydown(e) {
    const keys = [
      'ArrowUp',
      'ArrowDown',
      'ArrowRight',
      'ArrowLeft',
      'Enter',
      'Tab'
    ];
    if (keys.includes(e.code)) {
      e.preventDefault();
      const currentCords = this.selection.$current.cellId();
      const $next = this.$root.find(switchKey(e, currentCords));
      this._selectCell($next);
    }
  }
  onInput(e) {
    this.$dispatch(cellInputAction({
      id: $(e.target).data('id'),
      text: $(e.target).text()
    })
    );
  }


  _selectCell(cell) {
    this.selection.select(cell);
    // this.$emmit('selectCell:table', [this.selection.$current.text()]);
    this.$dispatch(cellInputAction({
      id: this.selection.$current.data('id'),
      text: this.selection.$current.text()
    })
    );
  }
  resizeTable(e) {
    resizeHandler(e, this.$root)
        .then((data)=> this.$dispatch(resizeAction(data)));
  }
}