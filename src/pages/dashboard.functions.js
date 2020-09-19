import {storage} from '../core/utils';

const getKeys = () => {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes('excel')) continue;
    keys.push(key);
  }
  return keys;
};


export const getTables = () => {
  const keys = getKeys();
  const tables = [];

  if (!keys.length) {
    return `<p class="warn" >You don't have any tables</p>`;
  }
  keys.forEach((key) => {
    const model = storage(key);
    const table = `
   <div class="dashboard__table">
         <div class="dashboard__table-left"> 
            <img src="./img/table-icon.svg" alt="" class="dashboard__table-img">
            <a href="#${key}" class="dashboard__table-name">${model.title}</a>
         </div>  
         <div class="dashboard__table-date">
         ${new Date(model.openedDate).toLocaleDateString()}
         ${new Date(model.openedDate).toLocaleTimeString()}
         </div>
   </div>`;
    tables.push(table);
  });


  const tablesContainer = `
  <div class="dashboard__tables-menu">
      <span>Name</span>
      <span>Date</span>
  </div>
  <div class="dashboard__tables-wrapper">
     ${tables.join(' ')}
  </div>`;


  return tablesContainer;
};