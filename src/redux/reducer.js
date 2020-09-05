

export const rootReducer = (state, action) =>{
  let prevState;
  let field;
  switch (action.type) {
    case 'TABLE_RESIZE':
      field = action.field === 'col' ? 'colState' : 'rowState';
      prevState = state[field] || {};
      prevState[action.id] = action.value;
      return {...state, [field]: prevState};


    default: return state;
  }
};