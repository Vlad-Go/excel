import './scss/style.scss';
import {Excel} from './components/Excel/Excel';
import {Header} from './components/header/header';
import {Toolbar} from './components/toolbar/Toolbar';
import {Formula} from './components/formula/Formula';
import {Table} from './components/table/Table.js';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
});

excel.render();