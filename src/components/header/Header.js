import {ExcelComponent} from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
  // static className = 'excel__header';
  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['click']
    });
  }
  toHTML() {
    return `
    <div class="excel__header-box">
      <img class="main-img" src="./img/excel.svg" alt="">
      <input type="text" class="excel__header-title" value="New Table">
    </div>
    <div class="excel__header-box">
        <button class="excel__header-btn">
          <img src="./img/delete.svg" alt="">
        </button>
        <button class="excel__header-btn">
          <img src="./img/exit.svg" alt="">
        </button> 
    </div> 
    `;
  }
  onClick(e) {
    console.log(e.target);
  }
}