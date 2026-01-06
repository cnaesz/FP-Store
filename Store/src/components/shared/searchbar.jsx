import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='max-w-2xl mx-auto my-8'>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search for products, categories, or brands...'
          className='w-full px-6 py-4 text-lg rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none transition duration-300 shadow-sm'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='absolute right-3 top-3 bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition duration-300'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
      <p className='text-sm text-gray-500 mt-2 text-center'>Search anything u want !</p>
    </div>
  );
};

export default SearchBar;
