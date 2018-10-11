let array = ['xhfkjdfjhf',  'ahashfchfdjdjkf', 'xhlfolflf', 'hejkfjgogof', 'bebebfgjf', 'idsididnfdhfh', 'sifjfhdfjdfhjfd'];

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i=start; i<end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};


function qSort (array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }

    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);

    return array;
};

qSort(array);

console.log(qSort(array));
