import React from 'react';

const Sidebar = ({ algorithms, onSelect }) => {
  return (
    <aside className="bg-gray-900 text-white w-64 p-4">
      <h2 className="text-xl mb-4">Algorithms</h2>
      <ul>
        {algorithms.map((algo, index) => (
          <li
            key={index}
            onClick={() => onSelect(algo)}
            className="cursor-pointer py-2 px-4 hover:bg-gray-700"
          >
            {algo}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
