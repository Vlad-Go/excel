import {getTableId} from './Router/router.functions';

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const range = (start, end) => {
  if (start > end) {
    [end, start] = [start, end];
  }
  return new Array(end - start + 1)
      .fill('')
      .map((_, index) => start + index);
};

export const storage = (key, data) => {
  if (data) {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const isEqual = (a, b) => {
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  } else {
    return a === b;
  }
};

export function camelToDashCase(str) {
  return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}


export const toInlineStyle = (styles = {}) => {
  return Object.keys(styles)
      .map((style)=> camelToDashCase(style) + ':' + styles[style])
      .join(';');
};

export function debounce(fn, wait) {
  let timeout;
  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      // eslint-disable-next-line
      fn.apply(this, args)
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
export const clone = (obj) =>{
  return JSON.parse(JSON.stringify(obj));
};

export const getTableName = () => {
  const tableId = getTableId();
  return 'excel:' + tableId;
};