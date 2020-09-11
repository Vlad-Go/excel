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
      action.data.id.forEach((id) => {
        prevState[id] = action.data.text;
      });
      return {...state, currentText: action.data.text, cellData: prevState};
    case actions.CURRENT_STYLE:
      prevState = state.currentStyle || {};
      return {...state, currentStyle: {...prevState, ...action.data}};
    case actions.APPLY_STYLE:
      prevState = state.styleState || {};
      action.data.id.forEach((id) => {
        prevState[id] =
        {...prevState[id], ...action.data.value};
      });
      return {...state, styleState: prevState};
    case actions.EXCEL_TITLE:
      return {...state, title: action.title || 'New Table'};
    default: return state;
  }
};