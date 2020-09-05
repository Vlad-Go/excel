import {$} from '../../core/Dom';


export const resizeHandler = (e, $root, store) =>{
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
      const value = columWidth + delta;

      store.dispatch({
        type: 'TABLE_RESIZE',
        id: currentIndex,
        value: value,
        field: 'col'
      });
      $resizer.css({
        opacity: 0,
        height: '100%',
        right: 0
      });
      $currentColumn.css({
        width: value +'px'
      });
      $columnCeils
          .forEach((cell) => cell.style.width = value +'px');
    };
  }

  if (resizeType === 'row') {
    const $currentRow = $resizer.closest('.excel__table-row');
    const currentIndex = $currentRow.data('row');
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
      const value = columHeight + delta;
      store.dispatch({
        type: 'TABLE_RESIZE',
        id: currentIndex,
        value: value,
        field: 'row'
      });
      $resizer.css({
        opacity: 0,
        width: '100%',
        bottom: 0
      });
      $currentRow.css({
        height: value +'px'
      });
    };
  }
};