let arr = [3, 7, 2, 6, 4, 9]


function bucketSort(arr, min, max) {
    let buckets = Array(max - min + 1);
    console.log(buckets);
    let count = 0;
    for(let i=0; i < arr.length; i++) {
        count++;
        buckets[arr[i]-min] = (buckets[arr[i] - min] || 0) + 1;
        // console.log(buckets, 'run', count);
    }

    let ret = [];

    for(let i=min; i<=max; i++) {
        for(let j=0; j<buckets[i - min]; j++) {
            ret.push(i);
            // console.log(ret);
        }
    }

    return ret;
}

bucketSort(arr, 2, 9);

// console.log(bucketSort(arr, 2, 9));
