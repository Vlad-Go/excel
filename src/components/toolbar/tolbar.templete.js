export const getTolbarTempete = () => {
  const btns = [
    {
      name: 'align-left',
      isActive: false,
      value: {textAlign: 'left'}
    },
    {
      name: 'align-center',
      isActive: false,
      value: {textAlign: 'center'}
    },
    {
      name: 'align-right',
      isActive: false,
      value: {textAlign: 'right'}
    },
    {
      name: 'bold',
      isActive: false,
      value: {fontWeight: 'bold'}
    },
    {
      name: 'italic',
      isActive: false,
      value: {fontStyle: 'italic'}
    },
    {
      name: 'underline',
      isActive: false,
      value: {textDecoration: 'underline'}
    }
  ];
  const toolbar = [];

  btns.forEach((btn) => {
    const button = toButton(btn.name, btn.value);
    toolbar.push(button);
  });
  return toolbar.join(' ');
};


const toButton = (btnName, btnValue) => {
  return `
   <button class="excel__toolbar-btn" data-value='${JSON.stringify(btnValue)}'>
       <img src="./img/${btnName}.svg" 
       data-value='${JSON.stringify(btnValue)}' alt="">
   </button>
   `;
};