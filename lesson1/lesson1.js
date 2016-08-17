/**
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones
 * at both ends in the binary representation of N.
 *
 * For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
 * The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
 * The number 20 has binary representation 10100 and contains one binary gap of length 1.
 * The number 15 has binary representation 1111 and has no binary gaps.
 *
 * # Write a function:
 *
 * function solution(N);
 *
 * that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N
 * doesn't contain a binary gap.
 *
 * For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so
 * its longest binary gap is of length 5.
 *
 * # Assume that:
 *
 * N is an integer within the range [1..2,147,483,647].
 *
 * # Complexity:
 *
 * expected worst-case time complexity is O(log(N));
 * expected worst-case space complexity is O(1).
 *
 * @author itesic.
 */

function version1(N) {
    'use strict';

    var binary = (N >>> 0).toString(2),
        sequence = '',
        gap = 0;

    for (var i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            sequence += binary[i];
        } else {
            if (sequence.length > gap) {
                gap = sequence.length;
            }
            sequence = '';
        }
    }
    return gap;
}

function version2(N) {
    'use strict';

    var binary = (N >>> 0).toString(2),
        pattern = /10+1/g,
        sequence = '',
        gap = 0;

    var matches = (binary.match(pattern));

    if (matches) {
        matches.forEach(function(g) {
            if (g.length - 2 > gap) {
                gap = g.length - 2;
            }
        });
    }

    return gap;
}

function solution(N) {
    'use strict';

    return version1(N);
}

module.exports = {
    solution: solution
};