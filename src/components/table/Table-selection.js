import {range} from '../../core/utils';
import {$} from '../../core/Dom';


export class TableSelection {
  constructor() {
    this.$current,
    this.group = [];
  }
  select($cell) {
    clear(this.group);
    $cell.addClass('selected');
    this.group.push($cell);
    this.$current = $cell;
  }
  selectGroup($cell) {
    clear(this.group);
    const startColumn = this.$current.cellId(1);
    const startRow = +this.$current.cellId(0);

    const endColumn = +$cell.cellId(1);
    const endRow = +$cell.cellId(0);

    const rangeRow = range(startRow, endRow);
    const rangeCol = range(startColumn, endColumn);

    const selectedCellIds = rangeCol.reduce((acc, col) => {
      rangeRow.forEach((row) => acc.push(`${row}:${col}`));
      return acc;
    }, []);

    selectedCellIds.forEach((cellId)=> {
      $cell = $(document.querySelector(`[data-id='${cellId}']`));
      $cell.addClass('selected');
      this.group.push($cell);
    });
  }
}


const clear = (group) =>{
  group.forEach((cell)=> {
    cell.removeClass('selected');
  });
  group = [];
};