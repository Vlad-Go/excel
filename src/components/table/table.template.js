import {initialState} from '../../vars';
import {toInlineStyle} from '../../core/utils';

const MIN_HEIGHT = '24px';
const MIN_WIDTH = '120px';
let state;
let cellData;
let cellsWidth;
let rowsHeight;
let styleState;

const charCode = {
  A: 65,
  Z: 90
};


export const getTableTemplete = (rowCount = 25, store) => {
  state = store.getState();
  cellsWidth = state.colState;
  rowsHeight = state.rowState;
  cellData = state.cellData;
  styleState = state.styleState;

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
  const height = rowsHeight[info] ? rowsHeight[info] + 'px' : MIN_HEIGHT;
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
  const columns = [];
  
  for (let cell = 0; cell < columnCount; cell++) {
    const width = cellsWidth[cell] ? cellsWidth[cell] + 'px' : MIN_WIDTH;
    const cellId = rowCount +':' + cell;
    const styles = toInlineStyle( {...initialState, ...styleState[cellId] || null});
    
    columns.push(
        `<div class="excel__table-data-cell" contenteditable 
          data-id=${cellId} 
          data-col='${cell}'
          data-cell='true'
          style="${styles}; width:${width}">
          ${cellData[cellId] || ''}
        </div>`
    );
  }
  return columns.join(' ');
};