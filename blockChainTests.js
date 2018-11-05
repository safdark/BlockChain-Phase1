var expect = require('chai').expect;
var addTwoNumbers = require('../addTwoNumbers');

describe('calculateHash()', function () {
  it('should calculate the hash of the block without the hash field', function () {
    
    // 1. ARRANGE
    var x = 5;
    var y = 1;
    var sum1 = x + y;

    // 2. ACT
    var sum2 = addTwoNumbers(x, y);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);

  });
});