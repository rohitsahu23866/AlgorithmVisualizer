import React, { useEffect, useState } from 'react';
import { bubbleSort } from '../algorithms/bubbleSort';
import { quickSort } from '../algorithms/quickSort';
import { mergeSort } from '../algorithms/mergeSort';
import { selectionSort } from '../algorithms/selectionSort';
import { binarySearch } from '../algorithms/binarySearch';

const Visualizer = ({ algorithm, array, target }) => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCurrentStep(0);
    if (array.length) {
      if (algorithm === 'Bubble Sort') setSteps(bubbleSort(array));
      if (algorithm === 'Quick Sort') setSteps(quickSort(array));
      if (algorithm === 'Merge Sort') setSteps(mergeSort(array));
      if (algorithm === 'Selection Sort') setSteps(selectionSort(array));
      if (algorithm === 'Binary Search') {
        const sortedArray = array.slice().sort((a, b) => a - b);
        setSteps(binarySearch(sortedArray, target));
      }
    }
  }, [algorithm, array, target]);

  useEffect(() => {
    if (steps.length > 0) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [steps]);

  return (
    <div className="flex-1 p-4">
      <h2 className="text-xl mb-4">{algorithm} Visualization</h2>
      <div className="flex justify-center items-end h-80 border-t border-gray-700">
        {steps[currentStep]?.map((value, index) => (
          <div
            key={index}
            className="bg-blue-500 mx-1 relative"
            style={{
              height: `${value}px`,
              width: '30px',
            }}
          >
            <span className="absolute top-0 left-0 ml-1 mt-1 text-xs">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
