import {$} from '../core/Dom';
import {Page} from '../core/page/Page';
import {getTables} from './dashboard.functions';

const createHash = () => {
  return 'excel:' + Date.now();
};
export class DashboardPage extends Page {
  getRoot() {
    const $root = $.create('div', 'dashboard');
    $root.html(`<div class="dashboard__header">
     <img class="main-img" src="./img/excel.svg" alt="">
     <h1 class="dashboard__header-title">
        Pure JS Excel
     </h1>
  </div>
  <div class="dashboard__create">
     <div class="dashboard-container">
        <div class="dashboard__create-menu">
           <p class="dashboard__create-menu-caption">
              Create new table
           </p>
        </div>
        <div class="dashboard__create-cards">
           <a href="#${createHash()}" class="dashboard__create-item">
              <div class="dashboard__create-card">

                 <svg xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="0 0 448 448" width="512px" class=""><g><path d="m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0" class="active-path" /></g> </svg>

              </div>
              <p class="dashboard__create-card-caption">Empty file</p>
           </a>
        </div>         
     </div>
  </div>
  <div class="dashboard__tables">
   <div class="dashboard-container"> 
     ${getTables()}
   </div>
  </div>`);
    return $root;
  }
}