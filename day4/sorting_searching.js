/* BINARY SEARCH */
function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === target) {
      return mid; // Found the target 
    } else if (sortedArray[mid] < target) {
      left = mid + 1; // Continue searching in the right half
    } else {
      right = mid - 1; // Continue searching in the left half
    }
  }
  // Target not found
  return -1;
}

const sortedArray = [1, 2, 4, 8, 12, 16, 20];
const target = 12;

const index = binarySearch(sortedArray, target);
console.log("Index of", target, ":", index); // Output: Index of 12: 4
