import * as actions from './types';


export const rootReducer = (state, action) =>{
  let prevState;
  let field;
  switch (action.type) {
    case actions.TABLE_RESIZE:
      field = action.data.field === 'col' ? 'colState' : 'rowState';
      prevState = state[field] || {};
      prevState[action.data.id] = action.data.value;
      return {...state, [field]: prevState};
    case actions.CELL_INPUT:
      prevState = state.cellData || {};
      prevState[action.data.id] = action.data.text;
      return {...state, currentText: action.data.text, cellData: prevState};


    default: return state;
  }
};