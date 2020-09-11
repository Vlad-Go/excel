export const parse = (text) => {
  if (text.startsWith('=')) {
    try {
      return eval(text.slice(1));
    } catch (e) {
      return text;
    }
  }
  return text;
};