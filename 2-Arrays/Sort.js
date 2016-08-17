
function Sort(array, algorithm) {
    switch (algorithm) {
        case 'insertion':
            return insertionSort(array);
        default:
            return insertionSort(array);
    }
}

function insertionSort(a) {
    var item,
        holeIndex,
        i;

    a = a.slice();

    for(i = 0; i < a.length; i++) {
        item = a[i];
        holeIndex = i;

        while (holeIndex > 0 && a[holeIndex -1] > item) {
            a[holeIndex] = a[holeIndex - 1];
            holeIndex = holeIndex - 1;
        }

        a[holeIndex] = item;
    }
    return a;
}

module.exports = Sort;