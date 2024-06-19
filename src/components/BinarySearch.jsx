import React, { useState } from 'react';

const BinarySearch = ({ onSearch }) => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');

  const handleGenerateArray = () => {
    const arrayInput = prompt('Enter numbers separated by spaces:');
    if (arrayInput) {
      const parsedArray = arrayInput.split(' ').map((num) => parseInt(num, 10));
      setArray(parsedArray);
    }
  };

  const handleSearch = () => {
    const targetNumber = parseInt(target, 10);
    if (!isNaN(targetNumber)) {
      onSearch(array, targetNumber);
    } else {
      alert('Please enter a valid number for the target.');
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <button
          onClick={handleGenerateArray}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Enter Array
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">Target Element</label>
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md"
        />
      </div>
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default BinarySearch;
