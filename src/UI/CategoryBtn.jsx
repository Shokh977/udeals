import React from 'react';

const CategoryBtn = ({ Icon, label, onClick }) => {
  return (
    <button 
      className="flex items-center space-x-2 py-4 px-6 bg-gray-200 hover:bg-gray-300 rounded-lg shadow transition"
      onClick={onClick}
    >
      <Icon className="h-6 w-6 text-gray-700" />
      <span className="text-lg text-gray-700">{label}</span>
    </button>
  );
};

export default CategoryBtn;
