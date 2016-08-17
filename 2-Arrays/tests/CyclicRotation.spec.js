var chai = require('chai');
var expect = chai.expect;
var CyclicRotation = require('../CyclicRotation');

describe('CyclicRotation', function() {

    it('should return empty array when empty array is passed in', function(){
        expect(CyclicRotation([], 3)).to.eql([]);
    });

    it('should return the same array when it contains only one element', function(){
        expect(CyclicRotation([75], 3)).to.eql([75]);
    });

    it('should return [9, 7, 6, 3, 8] when A = [3, 8, 9, 7, 6] and K = 3', function() {
        expect(CyclicRotation([3, 8, 9, 7, 6], 3)).to.eql([9, 7, 6, 3, 8])
    });

    it('should return [7, 6, 3, 8, 9] when A = [3, 8, 9, 7, 6] and K = 7', function() {
        expect(CyclicRotation([3, 8, 9, 7, 6], 7)).to.eql([7, 6, 3, 8, 9])
    });

    it('should swap array element if only two provided and K is odd number', function() {
        expect(CyclicRotation([3, 8], 3)).to.eql([8, 3])
    });

    it('should stay the same array if only two elements provided and K is even number', function() {
        expect(CyclicRotation([3, 8], 2)).to.eql([3, 8])
    });

    it('should stay the same array if number of elements and shift are equal', function() {
        expect(CyclicRotation([3, 8, 4, 5], 4)).to.eql([3, 8, 4, 5])
    });

});