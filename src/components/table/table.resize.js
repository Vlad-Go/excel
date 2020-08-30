import {$} from '../../core/Dom';


export const resizeHandler = (e, $root) =>{
  const $resizer = $(e.target);
  const resizeType = $resizer.data('resize');

  if (resizeType === 'col') {
    const $currentColumn = $resizer.closest('.excel__table-data-column');
    const startCord = e.clientX;
    const columWidth = $currentColumn.width();
    const currentIndex = $currentColumn.data('col');
    const $columnCeils = $root.findAll(`[data-col="${currentIndex}"]`);
    let delta;

    $resizer.css({
      opacity: 1,
      height: $root.height() + 'px'
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
      width: $root.width() + 'px'
    });

    document.onmousemove = (e) =>{
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
};