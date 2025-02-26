const merge = (arr1, arr2) => {
    // This function merges two sorted arrays (arr1 and arr2) into a single sorted array.
    // Array to store the merged sorted elements.
    const results = [];

    // Compare elements from both arrays and push the smaller one into results.
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            results.push(arr1.shift()); // Remove and push the first element from arr1.
        } else {
            results.push(arr2.shift()); // Remove and push the first element from arr2.
        }
    }

    // If any elements remain in arr1, append them (since they're already sorted).
    while (arr1.length) {
        results.push(arr1.shift());
    }

    // If any elements remain in arr2, append them.
    while (arr2.length) {
        results.push(arr2.shift());
    }

    // Return the merged sorted array.
    return results;
}

const mergeSort = (arr) => {
    // Base case: If the array has 0 or 1 elements, it's already sorted.
    if (arr.length <= 1) return arr;

    // Find the middle index of the array.
    const middle = Math.floor(arr.length / 2);

    // Recursively split the array into left and right halves until each subarray has one element.
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    // Merge the sorted left and right halves.
    return merge(left, right);
}

module.exports = { merge, mergeSort };
//console.log(mergeSort([50, 29, 1, 0, -2, 'b', 'a']));
