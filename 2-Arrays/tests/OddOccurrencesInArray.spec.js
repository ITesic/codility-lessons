var chai = require('chai');
var expect = chai.expect;
var OddOccurrencesInArray = require('../OddOccurrencesInArray');

describe('OddOccurrencesInArray', function() {
    it('should find only one number that doesn\'t have a pair', function(){
        expect(OddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])).to.be.eql(7);
    });

    it('should return one element if it\'s the only one', function(){
        expect(OddOccurrencesInArray([9])).to.be.eql(9);
    });
});