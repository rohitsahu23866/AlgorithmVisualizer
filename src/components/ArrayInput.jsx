import React, { useState } from 'react';

const ArrayInput = ({ onGenerate }) => {
  const [size, setSize] = useState(20);
  const [elements, setElements] = useState('');

  const handleGenerate = () => {
    if (elements) {
      const array = elements.split(',').map(Number);
      onGenerate(array);
    } else {
      const array = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
      onGenerate(array);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">Array Size</label>
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">Array Elements (comma separated)</label>
        <input
          type="text"
          value={elements}
          onChange={(e) => setElements(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md"
        />
      </div>
      <button
        onClick={handleGenerate}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Generate Array
      </button>
    </div>
  );
};

export default ArrayInput;
