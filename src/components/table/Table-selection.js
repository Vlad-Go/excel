import {range} from '../../core/utils';
import {$} from '../../core/Dom';


export class TableSelection {
  constructor() {
    this.$current,
    this.group = [];
  }
  select($cell) {
    this.clear();
    $cell.addClass('selected');
    $cell.focus();
    this.group.push($cell);
    this.$current = $cell;
  }
  selectGroup($cell) {
    this.clear();
    const currentCords = this.$current.cellId();
    const {row: startRow, col: startColumn} = currentCords;

    const endCords = $cell.cellId();
    const {row: endRow, col: endColumn} = endCords;

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


  clear() {
    this.group.forEach((cell)=> {
      cell.removeClass('selected');
    });
    this.group = [];
  }
  applyStyle(style) {
    this.group.forEach((cell) => cell.css(style));
  }
  getIds() {
    const ids = this.group.map((cell) => cell.data('id'));
    return ids;
  }
}