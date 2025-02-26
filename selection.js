const selectionSort = (arr) => {
    // The function sorts an array using the Selection Sort algorithm.
    // It repeatedly finds the smallest element in the unsorted portion 
    // and swaps it with the first unsorted element.

    for (let i = 0; i < arr.length; i++) {
        let currentMinimum = i; // Assume the first unsorted element is the smallest.

        // Iterate through the unsorted portion of the array to find the smallest element.
        for (let j = i + 1; j < arr.length; j++) { // Start from i+1 to compare with currentMinimum
            if (arr[j] < arr[currentMinimum]) {
                currentMinimum = j; // Update index of the new minimum value.
            }
        }

        // Swap the smallest found element with the first unsorted element.
        [arr[i], arr[currentMinimum]] = [arr[currentMinimum], arr[i]];
    }

    // Return the sorted array.
    return arr;
}

module.exports = selectionSort;
