import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  // static className = 'excel__formula';
  constructor($root) {
    super($root, {
      name: 'formula',
      listeners: []
    });
    this.$root = $root;
  }
  toHTML() {
    return `
    <div class="excel__formula-label">
      <img src="./img/fx.svg" alt="">
    </div>
    <div class="excel__formula-value" contenteditable> </div>
    `;
  }
}