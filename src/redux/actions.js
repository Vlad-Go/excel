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