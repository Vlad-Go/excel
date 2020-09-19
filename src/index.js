import {Router} from './core/Router/Router';
import {DashboardPage} from './pages/DashboardPage';
import {ExcelPage} from './pages/ExcelPage';
import './scss/style.scss';

const router = new Router(
    '#app',
    {
      dashboard: DashboardPage,
      excel: ExcelPage
    }
);
router.init();