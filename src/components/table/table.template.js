import {storage} from '../../core/utils';
const cellsWidth = storage().colState;
const rowsWidth = storage().rowState;
const MIN_HEIGHT = '24px';
const MIN_WIDTH = '120px';
const charCode = {
  A: 65,
  Z: 90
};


export const getTableTemplete = (rowCount = 25) => {
  const columnCount = charCode.Z - charCode.A;
  const rows = [];

  // create table heder row
  const headerColunm = createHeaderColumns(columnCount);
  rows.push(createRow('', headerColunm));

  // create table  rows
  for (let i = 0; i < rowCount; i++) {
    const column = createCell(i, columnCount);
    rows.push(createRow(i + 1, column));
  }

  return rows.join(' ');
};


// -------Header
const createHeaderColumns = (columnCount) =>{
  const columns = Array(columnCount)
      .fill('')
      .map(toLetter)
      .map(toColumn);
  return columns.join(' ');
};


const toLetter = (_, index) =>{
  return String.fromCharCode(charCode.A + index);
};
const toColumn = (letter, index) =>{
  const width = cellsWidth[index] ? cellsWidth[index] + 'px' : MIN_WIDTH;

  return `
  <div class="excel__table-data-column" 
                    data-col="${index}"
                    style="width:${width}" >
     ${letter}
     <div class="column-resize" data-resize="col"></div>
  </div>`;
};
// ------


const createRow = (info, data) =>{
  const height = rowsWidth[info] ? rowsWidth[info] + 'px' : MIN_HEIGHT;
  const shouldResizer =
   info ? `<div class="row-resize" data-resize="row"></div>` : '';

  const row = `
    <div class="excel__table-row" style="height:${height}" data-row="${info}">
      <div class="excel__table-row-info">
         ${info} ${shouldResizer}
      </div>
      <div class="excel__table-row-data"> ${data} </div> 
    </div>`;
  return row;
};
const createCell = (rowCount, columnCount) =>{
  const MIN_WIDTH = '120px';
  const columns = [];

  for (let cell = 0; cell < columnCount; cell++) {
    const width = cellsWidth[cell] ? cellsWidth[cell] + 'px' : MIN_WIDTH;
    columns.push(
        `<div class="excel__table-data-cell" contenteditable 
          data-id=${rowCount +':' + cell} 
          data-col='${cell}'
          data-cell='true'
          style="width:${width}">
  
        </div>`
    );
  }
  return columns.join(' ');
};