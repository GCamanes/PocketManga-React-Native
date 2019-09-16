function getChunckedArray(chunk = 2, array) {
  let tempArray = [];
  for (let i = 0; i < array.length; i += chunk) {
    tempArray.push(array.slice(i, i + chunk));
  }
  return tempArray;
}

export default {
  getChunckedArray,
};
