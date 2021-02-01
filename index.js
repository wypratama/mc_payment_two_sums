module.exports = twoSum = (array, target) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        if (array[i] + array[j] === target) {
          return [i, j];
        }
      }
    }
  }
  return result;
};
