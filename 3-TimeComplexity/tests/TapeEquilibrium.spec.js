var chai = require('chai');
var expect = chai.expect;
var TapeEquilibrium = require('../TapeEquilibrium');

describe('TapeEquilibrium', function () {

    it('should be 1 for array [3,1,2,4,3]', function (){
        expect(TapeEquilibrium([3,1,2,4,3])).to.equal(1);
    });

    it('should be 2000 for array [1000, -1000]', function (){
        expect(TapeEquilibrium([1000, -1000])).to.equal(2000);
    });
});