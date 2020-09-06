import './scss/style.scss';
import {Excel} from './components/Excel/Excel';
import {Header} from './components/header/header';
import {Toolbar} from './components/toolbar/Toolbar';
import {Formula} from './components/formula/Formula';
import {Table} from './components/table/Table.js';
import {createStore} from './core/store';
import {rootReducer} from './redux/reducer';
import {initialState} from './redux/initialState';

const store = createStore(rootReducer, initialState);

const excel = new Excel(
    '#app',
    {components: [Header, Toolbar, Formula, Table]},
    store
);

excel.render();