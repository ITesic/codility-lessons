var chai = require('chai');
var expect = chai.expect;
var PermMissingElem = require('../PermMissingElem');

describe('PermMissingElem', function () {

    it('should be 1 if array is empty', function () {
        expect(PermMissingElem([])).to.equal(1);
    });

    it('should be 4 for array [2, 3, 1, 5]', function () {
        expect(PermMissingElem([2, 3, 1, 5])).to.equal(4);
    });

    it('should be 1 for array [2, 3, 5, 4]', function () {
        expect(PermMissingElem([2, 3, 5, 4])).to.equal(1);
    });

    it('should be 5 for array [2, 3, 1, 4]', function () {
        expect(PermMissingElem([2, 3, 1, 4])).to.equal(5);
    });
});