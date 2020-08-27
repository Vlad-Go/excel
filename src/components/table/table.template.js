const charCode = {
  A: 65,
  Z: 90
};


export const getTableTemplete = (rowCount = 25) => {
  const columnCount = charCode.Z - charCode.A;
  const rows = [];

  // create table heder row
  const headerColunm = createHeaderColumns(columnCount);
  rows.push(createRow(' ', headerColunm));

  // create table  rows
  for (let i = 0; i < rowCount; i++) {
    const column = createColumn(columnCount);
    rows.push(createRow(i + 1, column));
  }

  return rows.join(' ');
};


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
const toColumn = (letter) =>{
  return `
  <div class="excel__table-data-column">
     ${letter}
  </div>`;
};


const createRow = (info, data) =>{
  const row = `
    <div class="excel__table-row">
      <div class="excel__table-row-info"> ${info}</div>
      <div class="excel__table-row-data"> ${data} </div>
    </div>`;
  return row;
};
const createColumn = (columnCount) =>{
  const columns = [];
  for (let i = 0; i < columnCount; i++) {
    columns.push(`<div class="excel__table-data-ceil" contenteditable></div>`);
  }
  return columns.join(' ');
};