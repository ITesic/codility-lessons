var chai = require('chai');
var expect = chai.expect;
var Sort = require('../Sort');

describe('Sort', function() {

    it('Sort([], \'insertion\') should sort array asc using insertion algorithm', function(){
        expect(Sort([5, 3, 7, 9, 1, 4, 6, 8, 2], 'insertion')).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

});