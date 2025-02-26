const insertionSort = (arr) => {
    // The function sorts an array using the Insertion Sort algorithm.
    // It builds the sorted portion of the array one element at a time.

    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i]; // Store the current element to be placed in the correct position.
        let j = i - 1; // Start comparing with the previous element.

        // Shift elements that are greater than 'curr'
        // to the right to make space for insertion.
        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j]; // Move the larger element one position to the right.
            j--; // Move the comparison index to the left.
        }

        // Insert 'curr' at its correct position.
        arr[j + 1] = curr;
    }

    // Return the sorted array.
    return arr;
}

module.exports = insertionSort;