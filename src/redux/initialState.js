import {storage} from '../core/utils';
import {initialState} from '../vars';

const defaultState = {
  colState: {},
  rowState: {},
  cellData: {},
  currentText: '',
  currentStyle: initialState
};

const setDefaultState = () =>{
  storage(defaultState);
  return defaultState;
};

export const initState = storage() || setDefaultState();