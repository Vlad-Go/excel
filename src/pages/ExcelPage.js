
import {Excel} from '../components/Excel/Excel';
import {Formula} from '../components/formula/Formula';
import {Header} from '../components/header/Header';
import {Table} from '../components/table/Table';
import {Toolbar} from '../components/toolbar/Toolbar';
import {Page} from '../core/Page';
import {createStore} from '../core/store';
import {debounce, getTableName, storage} from '../core/utils';
import {initStore} from '../redux/initialState';
import {rootReducer} from '../redux/reducer';


export class ExcelPage extends Page {
  constructor() {
    super();
  }
  getRoot() {
    debugger;
    const tableName = getTableName();

    const store = createStore(rootReducer, initStore());
    const stateListener = debounce((state) => {
      console.log('App State: ', state);
      storage(tableName, state);
    }, 300);
    store.subscribe(stateListener);

    this.excel = new Excel(
        {components: [Header, Toolbar, Formula, Table]},
        store
    );
    return this.excel.getRoot();
  }
  afterRender() {
    this.excel.init();
  }
  destroy() {
    this.excel.destroy();
  }
}