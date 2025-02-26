const bucketing = (arr, index = 0) => {
    // The function organizes numbers into buckets based on the digit at the specified index.
    // It extracts each number from the array, determines its digit at the given index,
    // and places it into the corresponding bucket (0-9).

    // Initialize empty buckets for digits 0-9.
    const buckets = [[], [], [], [], [], [], [], [], [], []];

    while (arr.length) {
        const value = arr.shift(); // Remove and retrieve the first element of the array.
        const digit = Math.floor(value / Math.pow(10, index)) % 10; // Extract the digit at the given index.

        // Place the number into the corresponding bucket.
        buckets[digit].push(value);
    }

    // Flatten all bucket contents into a single array and return.
    return buckets.flat();
}

const radixSort = (arr) => {
    // The function sorts an array of numbers using the Radix Sort algorithm.
    // It determines the maximum number of digits in the largest number
    // and iterates from the least significant digit (LSD) to the most significant digit (MSD).

    // Determine the maximum number of digits in the largest number.
    const max = String(Math.max(...arr)).length;

    for (let i = 0; i < max; i++) {
        arr = bucketing(arr, i); // Apply bucketing for each digit index.
    }

    // Return the fully sorted array.
    return arr;
}


module.exports = radixSort;
// console.log(radixSort([6287, 7393, 2327, 2341, 33, 1664, 10000, 3625, 7281, 6725, 5906, 2979]));