import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  // static className = 'excel__formula';
  constructor($root, options) {
    super($root, {
      name: 'formula',
      listeners: ['input', 'keydown'],
      ...options
    });
    this.$root = $root;
  }
  toHTML() {
    return `
    <div class="excel__formula-label">
      <img src="./img/fx.svg" alt="">
    </div>
    <div id="formulaInput" class="excel__formula-value" contenteditable> </div>
    `;
  }

  onInput(e) {
    // emmit value from formula to current cell
    this.$emmit('input:formula', [e.target.textContent]);
  }
  onKeydown(e) {
    const keys = ['Enter', 'Tab'];
    if (keys.includes(e.code)) {
      e.preventDefault();
      this.$emit('formula:done');
    }
  }
  prepare() {
    // subscribe to cell value for formula
    this.$subscribe('selectCell:table', (cellText)=>{
      this.$formulaInput.text(cellText);
    });
    // subscribe to cell value for formula
    this.$subscribe('cellInput:table', (text)=>{
      this.$formulaInput.text(text);
    });
  }
  init() {
    super.init();
    this.$formulaInput = this.$root.find('#formulaInput');
  }
}