export const shouldResize = (e) => {
  return e.target.dataset.resize;
};

export const isCell = (e) => {
  return e.target.classList.contains('excel__table-data-cell') && !e.shiftKey;
};

export const isCellGroup = (e) => {
  return e.target.classList.contains('excel__table-data-cell') && e.shiftKey;
};