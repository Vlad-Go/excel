import {storage} from '../core/utils';

const defaultState = {
  colState: {},
  rowState: {},
  cellData: {},
  currentText : ''
};

const setDefaultState = () =>{
  storage(defaultState);
  return defaultState;
};

export const initialState = storage() || setDefaultState();