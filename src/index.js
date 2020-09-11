import './scss/style.scss';
import {Excel} from './components/Excel/Excel';
import {Header} from './components/header/header';
import {Toolbar} from './components/toolbar/Toolbar';
import {Formula} from './components/formula/Formula';
import {Table} from './components/table/Table.js';
import {createStore} from './core/store';
import {rootReducer} from './redux/reducer';
import {initState} from './redux/initialState';
import {storage, debounce} from './core/utils';

const store = createStore(rootReducer, initState);

const stateListener = debounce((state) => {
  console.log('App State: ', state);
  storage(state);
}, 300);

store.subscribe(stateListener);


const excel = new Excel(
    '#app',
    {components: [Header, Toolbar, Formula, Table]},
    store
);

excel.render();