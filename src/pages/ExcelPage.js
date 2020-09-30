
import { Excel } from '../components/Excel/Excel';
import {Formula} from '../components/formula/Formula';
import {Header} from '../components/header/Header';
import {Table} from '../components/table/Table';
import {Toolbar} from '../components/toolbar/Toolbar';
import {Page} from '../core/page/Page';
import {Proccesor} from '../core/page/Processor';
import {createStore} from '../core/store/store';
import {LocalStorageProcessor} from '../processors/LocalStoreProcessor';
import {initStore} from '../redux/initialState';
import {rootReducer} from '../redux/reducer';


export class ExcelPage extends Page {
  constructor(hash) {
    super(hash);
    this.processor = new Proccesor(
        new LocalStorageProcessor(this.hash)
    );
    this.excel = null;
  }
  async getRoot() {
    const state = await this.processor.get();
    const store = createStore(rootReducer, initStore(state));

    // const stateListener = debounce((state) => {
    //   storage(this.hash, state);
    // }, 300);
    this.storeSub = store.subscribe(this.processor.listen);

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
    this.storeSub.unsubscribe();
  }
}