import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  // static className = 'excel__formula';
  constructor($root, options) {
    super($root, {
      name: 'formula',
      listeners: ['input'],
      ...options
    });
    this.$root = $root;

    this.$subscribe('selectNewCell:table', (text)=>{
      this.$formulaInput.text(text);
    });
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
    this.$emmit('input:formula', [e.target.textContent]);
  }
  init() {
    super.init();
    this.$formulaInput = this.$root.find('#formulaInput');
  }
}