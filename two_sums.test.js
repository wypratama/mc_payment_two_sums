const twoSum = require('./index');

describe('MC Payment Two Sums Test', () => {
  describe('running basic test', () => {
    test('should return [ 0, 2 ] when given array [2, 7, 11, 15]', () => {
      expect(twoSum([2, 7, 11, 15], 13)).toEqual(
        expect.arrayContaining([0, 2])
      );
    });
    test('should return [ 1, 2 ] when given array [3, 2, 4]', () => {
      expect(twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
    });
    test('should return [ 0, 1 ] when given array [3, 3]', () => {
      expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
    });
  });
});
