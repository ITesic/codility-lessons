/**
 * Created by itesic on 17/08/16.
 */
var chai = require('chai');
var expect = chai.expect;
var BinaryGap = require('../BinaryGap');

describe('BinaryGap', function() {
    it('should return 0 when called without params', function() {
        expect(BinaryGap()).to.equal(0);
    });

    it('should return 5 when N = 1041', function() {
        expect(BinaryGap(1041)).to.equal(5);
    });

    it('should return 0 when N doesn\'t contain gap', function() {
        expect(BinaryGap(15)).to.equal(0);
    });

    it('should return 3 when N = 52789', function() {
        expect(BinaryGap(52789)).to.equal(3);
    });
});