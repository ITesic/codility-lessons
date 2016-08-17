/**
 * Created by itesic on 17/08/16.
 */
var chai = require('chai');
var expect = chai.expect;
var lesson1 = require('../lesson1');

describe('lesson1', function() {
    it('solution() should return 0 when called without params', function() {
        expect(lesson1.solution()).to.equal(0);
    });

    it('solution(N) should return 5 when N = 1041', function() {
        expect(lesson1.solution(1041)).to.equal(5);
    });

    it('solution(N) should return 0 when N doesn\'t contain gap', function() {
        expect(lesson1.solution(15)).to.equal(0);
    });

    it('solution(N) should return 3 when N = 52789', function() {
        expect(lesson1.solution(52789)).to.equal(3);
    });
});