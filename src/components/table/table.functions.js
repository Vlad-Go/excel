export const shouldResize = (e) => {
  return e.target.dataset.resize;
};

export const isCell = (e) => {
  return e.target.classList.contains('excel__table-data-cell') && !e.shiftKey;
};

export const isCellGroup = (e) => {
  return e.target.classList.contains('excel__table-data-cell') && e.shiftKey;
};

export const switchKey = (e, {row, col}) => {
  const MIN_VALUE = 0;
  switch (e.code) {
    case 'ArrowUp': {
      if (row > MIN_VALUE) {
        return `[data-id="${row-1}:${col}"]`;
      }
      break;
    }
    case 'Enter':
    case 'ArrowDown': {
      return `[data-id="${row+1}:${col}"]`;
      break;
    }
    case 'Tab':
    case 'ArrowRight': {
      return `[data-id="${row}:${col+1}"]`;
      break;
    }
    case 'ArrowLeft': {
      if (col > MIN_VALUE) {
        return `[data-id="${row}:${col-1}"]`;
      }
      break;
    }
  }
};