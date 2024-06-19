export const bubbleSort = (arr) => {
  let steps = [];
  let array = arr.slice();
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        steps.push(array.slice());
        swapped = true;
      }
    }
  } while (swapped);
  return steps;
};
