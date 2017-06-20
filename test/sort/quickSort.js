var assert = require('assert');
var quickSort = require('../../source/sort/quickSort.js');

describe('sort', function(){
  describe('quickSort', function(){
    it('function quickSort worked', function(){
      var array = [1,5,3,2,4];
      quickSort(array, 0, 4);
      assert.deepStrictEqual(array, [1,2,3,4,5]);
    });
  });
});
