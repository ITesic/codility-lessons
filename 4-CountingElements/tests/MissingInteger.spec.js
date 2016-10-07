var chai = require('chai');
var expect = chai.expect;
var MissingInteger = require('../MissingInteger');

describe('MissingInteger', function() {
  it('should be defined', function() {
    expect(MissingInteger).to.exist;
  });
  it('should return 5 for input [1, 3, 6, 4, 1, 2]', function(){
    expect(MissingInteger([1, 3, 6, 4, 1, 2])).to.equal(5);
  });
  it('should return 4 for input [1, 3, -7, 6, 5, 1, 2, -3]', function(){
    expect(MissingInteger([1, 3, -7, 6, 5, 1, 2, -3])).to.equal(4);
  });
  it('should return 7 for input [1, 3, 6, 4, 5, 2]', function(){
    expect(MissingInteger([1, 3, 6, 4, 5, 2])).to.equal(7);
  });
  it('should return 2 for input [1]', function(){
    expect(MissingInteger([1])).to.equal(2);
  });
  it('should return 1 for input [-7]', function(){
    expect(MissingInteger([-7])).to.equal(1);
  });
});
