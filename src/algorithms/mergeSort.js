export const mergeSort = (arr) => {
    let steps = [];
  
    const merge = (left, right) => {
      let result = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      return result.concat(left, right);
    };
  
    const mergeSortRecursive = (array) => {
      if (array.length <= 1) return array;
      const mid = Math.floor(array.length / 2);
      const left = mergeSortRecursive(array.slice(0, mid));
      const right = mergeSortRecursive(array.slice(mid));
      const result = merge(left, right);
      steps.push(result);
      return result;
    };
  
    mergeSortRecursive(arr.slice());
    return steps;
  };
  