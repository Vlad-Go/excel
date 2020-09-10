export const getTolbarTempete = (state) => {
  const btns = [
    {
      name: 'align-left',
      isActive: state.textAlign === 'left',
      value: {textAlign: 'left'}
    },
    {
      name: 'align-center',
      isActive: state.textAlign === 'center',
      value: {textAlign: 'center'}
    },
    {
      name: 'align-right',
      isActive: state.textAlign === 'right',
      value: {textAlign: 'right'}
    },
    {
      name: 'bold',
      isActive: state.fontWeight === 'bold',
      value: {fontWeight: state.fontWeight === 'bold' ? 'normal' : 'bold'}
    },
    {
      name: 'italic',
      isActive: state.fontStyle === 'italic',
      value: {fontStyle: state.fontStyle === 'italic' ? 'normal' : 'italic'}
    },
    {
      name: 'underline',
      isActive: state.textDecoration === 'underline',
      value: {textDecoration:
        state.textDecoration === 'underline' ? 'normal' : 'underline'
      }
    }
  ];
  const toolbar = [];

  btns.forEach((btn) => {
    const button = toButton(btn.name, btn.value, btn.isActive);
    toolbar.push(button);
  });
  return toolbar.join(' ');
};


const toButton = (btnName, btnValue, isActive) => {
  const value =JSON.stringify(btnValue);
  const isSelect = isActive ? 'active' :'';
  const data = `data-value='${value}' data-type="button"`;

  return `
   <button class="excel__toolbar-btn ${isSelect}" ${data}>
       <img src="./img/${btnName}.svg" ${data} alt="">
   </button>
   `;
};