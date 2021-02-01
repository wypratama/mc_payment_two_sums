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

console.log(twoSum([2, 7, 11, 15], 13));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
