import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  // static className = 'excel__formula';
  constructor($root, options) {
    super($root, {
      name: 'formula',
      listeners: ['input', 'keydown'],
      subscribe: ['currentText'],
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

  init() {
    super.init();
    this.$formulaInput = this.$root.find('#formulaInput');
    this.$subscribe('selectCell:table', (cellText)=>{
      this.$formulaInput.text(cellText);
    });
  }
  changeStore(store) {
    this.$formulaInput.text(store.currentText);
  }
  onInput(e) {
    console.log(e);
    // if (e.target.startWith('='))
    this.$emmit('input:formula', [e.target.textContent]);
  }
  onKeydown(e) {
    const keys = ['Enter', 'Tab'];
    if (keys.includes(e.code)) {
      e.preventDefault();
      this.$emmit('done:formula', ['']);
    }
  }
}