import {ExcelComponent} from '../../core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  // static className = 'excel__toolbar'
  constructor($root) {
    super($root, {
      name: 'toolbar',
      listeners: ['click']
    });
  }
  toHTML() {
    return `
      <button class="excel__toolbar-btn">
        <img src="./img/align-left.svg" alt="">
      </button>
      <button class="excel__toolbar-btn">
        <img src="./img/align-center.svg" alt="">
      </button>
      <button class="excel__toolbar-btn">
        <img src="./img/align-right.svg" alt="">
      </button>
      <button class="excel__toolbar-btn">
        <img src="./img/bold.svg" alt="">
      </button>
      <button class="excel__toolbar-btn">
        <img src="./img/italic.svg" alt="">
      </button>
      <button class="excel__toolbar-btn">
        <img src="./img/underline.svg" alt="">
      </button>
    `;
  }
}