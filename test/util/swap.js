var assert = require('assert');
var exchange = require('../../source/util/swap.js');

describe('util', function(){
  describe('swap', function(){
    it('function swap worked', function(){
      var array = [1,2,3,4,5];
      exchange(array, 1, 3);
      assert.deepStrictEqual(array,[1,4,3,2,5]);
    });
  });
});
