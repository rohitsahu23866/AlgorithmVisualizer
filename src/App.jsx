import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Visualizer from './components/Visualizer';
import ArrayInput from './components/ArrayInput';
import BinarySearch from './components/BinarySearch';

const App = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Bubble Sort');
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState(null);
  const algorithms = ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Selection Sort', 'Binary Search'];

  const handleGenerateArray = (array) => {
    setArray(array);
    setTarget(null);
  };

  const handleSelectAlgorithm = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  const handleBinarySearch = (sortedArray, target) => {
    setSelectedAlgorithm('Binary Search');
    setArray(sortedArray);
    setTarget(target);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <Header />
      <div className="flex flex-1">
        <Sidebar algorithms={algorithms} onSelect={handleSelectAlgorithm} />
        <div className="flex-1 p-4">
          {selectedAlgorithm === 'Binary Search' ? (
            <BinarySearch array={array} onSearch={handleBinarySearch} />
          ) : (
            <ArrayInput onGenerate={handleGenerateArray} />
          )}
          <Visualizer algorithm={selectedAlgorithm} array={array} target={target} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
