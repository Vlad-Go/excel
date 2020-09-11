import {ExcelComponent} from '../../core/ExcelComponent';
import {excelTitle} from '../../redux/actions';

export class Header extends ExcelComponent {
  // static className = 'excel__header';
  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      subscribe: ['title'],
      ...options
    });
  }
  toHTML() {
    const title =this.store.getState().title;
    return `
    <div class="excel__header-box">
      <img class="main-img" src="./img/excel.svg" alt="">
      <input type="text" class="excel__header-title" value="${title}">
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
  changeStore({title}) {
  }

  onInput(e) {
    const title = e.target.value;
    this.$dispatch(excelTitle(title));
  }
}