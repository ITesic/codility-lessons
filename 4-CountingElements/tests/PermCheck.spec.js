var chai = require('chai');
var expect = chai.expect;
var PermCheck = require('../PermCheck');

describe('PermCheck', function () {
    it('should be 1 for [4, 1, 3, 2]', function () {
        expect(PermCheck([4, 1, 3, 2])).to.equal(1)
    });

    it('should be 0 for [4, 1, 3]', function () {
        expect(PermCheck([4, 1, 3])).to.equal(0)
    });

    it('should be 0 for [4, 1, 3, 2, 1, 4]', function () {
        expect(PermCheck([4, 1, 3, 2, 1, 4])).to.equal(0)
    });
});