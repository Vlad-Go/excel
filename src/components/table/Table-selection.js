let prevCeil;

export const select = (e) => {
  if (prevCeil) prevCeil.classList.remove('selected');
  const ceil = e.target;
  ceil.classList.add('selected');
  prevCeil = ceil;
};