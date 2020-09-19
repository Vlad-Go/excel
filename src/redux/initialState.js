import {storage, clone, getTableName} from '../core/utils';
import {initialState} from '../vars';

const defaultState = {
  colState: {},
  rowState: {},
  cellData: {},
  styleState: {},
  title: 'New Table',
  currentText: '',
  currentStyle: initialState,
  openedDate: new Date().toJSON()
};

const setDefaultState = () => clone(defaultState);
export const initStore = () => storage(getTableName()) || setDefaultState();