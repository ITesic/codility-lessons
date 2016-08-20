var chai = require('chai');
var expect = chai.expect;
var FrogJmp = require('../FrogJmp');

describe('FrogJmp', function () {

    it('should be 0 for array X = 10, Y= 10, D=30', function () {
        expect(FrogJmp(10, 10, 30)).to.equal(1);
    });

    it('should be 0 for array X = 10, Y=10, D=6', function () {
        expect(FrogJmp(10, 10, 6)).to.equal(1);
    });

    it('should be 3 for array X = 10, Y=100, D=30', function () {
        expect(FrogJmp(10, 100, 30)).to.equal(3);
    });

    it('should be 3 for array X = 10, Y=85, D=30', function () {
        expect(FrogJmp(10, 85, 30)).to.equal(3);
    });
});