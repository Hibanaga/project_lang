export const convertToArray = (object) => {
  const result = [];
  for (let el in object) {
    result.push({ title: el, progress: object[el] });
  }
  return result;
};
