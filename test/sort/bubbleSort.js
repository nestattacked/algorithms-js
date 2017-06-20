var assert = require('assert');
var bubbleSort = require('../../source/sort/bubbleSort.js');

describe('sort', function(){
  describe('bubbleSort', function(){
    it('function bubbleSort worked', function(){
      var array = [4,2,1,5,3];
      bubbleSort(array);
      assert.deepStrictEqual(array, [1,2,3,4,5]);
    });
  });
});
