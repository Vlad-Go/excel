export const getHash = () =>{
  return window.location.hash.slice(1);
};
export const setHash = (hash) =>{
  return window.location.hash = hash;
};
export const getTableId = () =>{
  return window.location.hash.split(':')[1];
};