import {ExcelComponent} from '../../core/ExcelComponent';
import {getTableTemplete} from './table.template';
import {$} from '../../core/Dom';


export class Table extends ExcelComponent {
  // static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    });
  }
  toHTML() {
    return getTableTemplete(50);
  }
  onMousedown(e) {
    if (e.target.dataset.resize) {
      const $resizer = $(e.target);
      const resizeType = $resizer.data('resize');

      if (resizeType === 'col') {
        const $currentColumn = $resizer.closest('.excel__table-data-column');
        const currentIndex = $currentColumn.data('col');
        const $columnCeils = this.$root.findAll(`[data-col="${currentIndex}"]`);

        const startCord = e.clientX;
        const columWidth = $currentColumn.width();
        let delta;
        $resizer.css({
          opacity: 1,
          height: this.$root.height() + 'px'
        });

        document.onmousemove = (e) =>{
          delta = e.clientX - startCord;
          $resizer.css({
            right: -delta +'px'
          });
        };
        document.onmouseup = (e) =>{
          document.onmousemove = null;
          document.onmouseup = null;
          $resizer.css({
            opacity: 0,
            height: '100%',
            right: 0
          });
          $currentColumn.css({
            width: columWidth + delta +'px'
          });
          $columnCeils
              .forEach((ceil) => ceil.style.width = columWidth + delta +'px');
        };
      }
      if (resizeType === 'row') {
        const $currentRow = $resizer.closest('.excel__table-row');

        const startCord = e.clientY;
        const columHeight = $currentRow.height();
        let delta;
        $resizer.css({
          opacity: 1,
          width: this.$root.width() + 'px'
        });

        document.onmousemove = (e) =>{
          console.log(e);
          delta = e.clientY - startCord;
          $resizer.css({
            bottom: -delta +'px',
            opacity: 1
          });
        };
        document.onmouseup = (e) =>{
          document.onmousemove = null;
          document.onmouseup = null;
          $resizer.css({
            opacity: 0,
            width: '100%',
            bottom: 0
          });
          $currentRow.css({
            height: columHeight + delta +'px'
          });
        };
      }
    }
  }
}