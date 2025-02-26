function bubbleSort(arr) {
    // The function sorts an array using the Bubble Sort algorithm.
    // It repeatedly swaps adjacent elements if they are in the wrong order.
    // The largest values "bubble" to the end with each pass.

    for (let i = 0; i < arr.length; i++) {
        let swapped = false; // Tracks whether any swaps occurred in this pass.

        // Inner loop iterates through the unsorted portion of the array.
        // The last `i` elements are already sorted, so we reduce the range.
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap adjacent elements if they are in the wrong order.
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Mark that a swap occurred.
            }
        }

        // If no swaps were made, the array is already sorted.
        if (!swapped) break;
    }

    // Return the sorted array.
    return arr;
}

module.exports = bubbleSort;
