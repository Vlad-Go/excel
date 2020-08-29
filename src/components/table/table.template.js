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
    const column = createCeil(columnCount);
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
const toColumn = (letter, index) =>{
  return `
  <div class="excel__table-data-column" data-col="${index}">
     ${letter}
     <div class="column-resize" data-resize="col"></div>
  </div>`;
};


// const createRow = (info, data) =>{
//   const shouldResizer =
//   info ? `<div class="row-resize" data-resize="row"></div>` : '';
//   const row = `
//     <div class="excel__table-row" data-row="${info}>
//       <div class="excel__table-row-info"> ${info}  ${shouldResizer}</div>
//       <div class="excel__table-row-data"> ${data} </div>
//     </div>`;
//   return row;
// };
const createRow = (info, data) =>{
  const shouldResizer =
   info ? `<div class="row-resize" data-resize="row"></div>` : '';
  const row = `
    <div class="excel__table-row" data-row="${info}">
      <div class="excel__table-row-info" data-row="${info}">
         ${info} ${shouldResizer}
      </div>
      <div class="excel__table-row-data"> ${data} </div> 
    </div>`;
  return row;
};
const createCeil = (columnCount) =>{
  const columns = [];
  for (let i = 0; i < columnCount; i++) {
    columns.push(
        `<div class="excel__table-data-ceil" contenteditable data-col="${i}">
        </div>`
    );
  }
  return columns.join(' ');
};