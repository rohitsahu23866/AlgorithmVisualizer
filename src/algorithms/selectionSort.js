export const selectionSort = (arr) => {
    let steps = [];
    let array = arr.slice();
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        steps.push(array.slice());
      }
    }
    return steps;
  };
  