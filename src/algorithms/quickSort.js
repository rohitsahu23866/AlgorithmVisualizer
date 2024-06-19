export const quickSort = (arr) => {
    let steps = [];
  
    const partition = (array, low, high) => {
      let pivot = array[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
          steps.push(array.slice());
        }
      }
      [array[i + 1], array[high]] = [array[high], array[i + 1]];
      steps.push(array.slice());
      return i + 1;
    };
  
    const quickSortRecursive = (array, low, high) => {
      if (low < high) {
        const pi = partition(array, low, high);
        quickSortRecursive(array, low, pi - 1);
        quickSortRecursive(array, pi + 1, high);
      }
    };
  
    quickSortRecursive(arr.slice(), 0, arr.length - 1);
    return steps;
  };
  