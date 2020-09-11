import * as actions from './types';

export const resizeAction = (data) => {
  return {
    type: actions.TABLE_RESIZE,
    data
  };
};
export const cellInputAction = (data) => {
  return {
    type: actions.CELL_INPUT,
    data
  };
};
export const currentStyle = (data) => {
  return {
    type: actions.CURRENT_STYLE,
    data
  };
};
export const applyStyle = (data) => {
  return {
    type: actions.APPLY_STYLE,
    data
  };
};
export const excelTitle = (title) => {
  return {
    type: actions.EXCEL_TITLE,
    title
  };
};