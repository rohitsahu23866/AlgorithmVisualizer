export const binarySearch = (arr, target) => {
  let steps = [];
  let low = 0;
  let high = arr.length - 1;

  const binarySearchRecursive = (array, low, high) => {
    if (low <= high) {
      let mid = Math.floor((low + high) / 2);
      steps.push({ array: array.slice(), mid, low, high });
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        return binarySearchRecursive(array, mid + 1, high);
      } else {
        return binarySearchRecursive(array, low, mid - 1);
      }
    }
    return -1;
  };

  binarySearchRecursive(arr, low, high);
  return steps;
};
