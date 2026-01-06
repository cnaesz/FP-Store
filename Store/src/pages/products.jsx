import React, { useState } from 'react';
import CategoryFilter from '../components/catFilter';
import ProductCard from '../components/home/ProductCard';
import SearchBar from '../components/shared/searchbar';
import useFetch from '../hooks/useFetch';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');
  const { data: categories } = useFetch('https://fakestoreapi.com/products/categories');

  const filteredProducts = products?.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !activeCategory || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (error) {
    return (
      <div className='text-center py-16'>
        <div className='text-red-500 text-6xl mb-4'>⚠️</div>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Error Loading Products</h2>
        <p className='text-gray-600 mb-6'>{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-gray-800 mb-2'>All Products</h1>
        <p className='text-gray-600'>Browse our complete collection of amazing products</p>
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {categories && (
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}

      {loading ? (
        <div className='flex justify-center items-center py-20'>
          <div className='relative'>
            <div className='w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin'></div>
            <p className='mt-4 text-gray-600 font-medium'>Loading all products...</p>
          </div>
        </div>
      ) : (
        <>
          <div className='mb-8 flex flex-col md:flex-row justify-between items-center gap-4'>
            <div>
              <h3 className='text-2xl font-bold text-gray-800'>
                {activeCategory || 'All'} Products
                <span className='text-lg font-normal text-gray-500 ml-2'>
                  ({filteredProducts?.length || 0} items)
                </span>
              </h3>
            </div>
            <select className='border-2 border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 bg-white'>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: High to Low</option>
              <option>Name: A-Z</option>
            </select>
          </div>

          {filteredProducts?.length === 0 ? (
            <div className='text-center py-16 bg-white rounded-2xl shadow-lg'>
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>No products found</h3>
              <p className='text-gray-600 mb-4'>Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('');
                }}
                className='bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300'
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
              {filteredProducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Products;
