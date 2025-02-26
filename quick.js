const quickSort = (arr) => {
    // Base case: If the array has 0 or 1 elements, it's already sorted, so return it as is.
    if (arr.length <= 1) return arr;

    // Choose the first element as the pivot.
    const pivot = arr.shift();
    const left = [];  // Holds values smaller than the pivot.
    const right = []; // Holds values greater than or equal to the pivot.

    // Partitioning: Compare each remaining element to the pivot and place it 
    // in the left or right sub-array accordingly.
    while (arr.length) {
        if (arr[0] < pivot) {
            left.push(arr.shift()); // Move smaller elements to the left array.
        } else {
            right.push(arr.shift()); // Move larger or equal elements to the right array.
        }
    }

    // Recursively apply quickSort to the left and right partitions,
    // then combine them with the pivot in between to form the sorted array.
    return [...quickSort(left), pivot, ...quickSort(right)];
}



module.exports = quickSort;
//console.log(quickSort([5, 8, 1, 9, 0, 3]));
