import {ExcelComponent} from '../../core/ExcelComponent';
import {setHash} from '../../core/Router/router.functions';
import {getTableName} from '../../core/utils';
import {excelTitle} from '../../redux/actions';

export class Header extends ExcelComponent {
  // static className = 'excel__header';
  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
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
        <button class="excel__header-btn" data-button="delete">
          <img src="./img/delete.svg" alt="" data-button="delete">
        </button>
        <button class="excel__header-btn" data-button="exit">
          <img src="./img/exit.svg" alt="" data-button="exit">
        </button> 
    </div> 
    `;
  }

  onInput(e) {
    const title = e.target.value;
    this.$dispatch(excelTitle(title));
  }

  onClick(e) {
    const button = e.target.dataset.button;
    if (button === 'exit') {
      setHash('');
    } else if (button === 'delete') {
      const currentTableHash = getTableName();
      localStorage.removeItem(currentTableHash);
      setHash('');
    }
  }
}