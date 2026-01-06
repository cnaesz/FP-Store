import React from 'react';

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  const allCategories = ['All', ...(categories || [])];

  return (
    <div className='mb-8'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>Shop by Category</h2>
      <div className='flex flex-wrap justify-center gap-3'>
        {allCategories.map((category) => (
          <button
            key={category}
            className={`px-6 py-3 rounded-full font-medium transition duration-300 transform hover:scale-105 ${
              activeCategory === category || (category === 'All' && !activeCategory)
                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-purple-100 hover:border-purple-300'
            }`}
            onClick={() => setActiveCategory(category === 'All' ? '' : category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
