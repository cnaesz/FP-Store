import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from '../components/catFilter';
import ProductCard from '../components/home/ProductCard';
import SearchBar from '../components/shared/searchbar';
import useFetch from '../hooks/useFetch';

const Home = () => {
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
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Connection Issue</h2>
        <p className='text-gray-600 mb-6'>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className='bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300'
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <div className='text-center mb-12'>
        <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
          Welcome to ShopEasy
          <span className='block text-2xl md:text-3xl text-purple-600 mt-2'>
            Your One-Stop Online Shop
          </span>
        </h2>
        <p className='text-gray-600 text-lg max-w-2xl mx-auto mb-6'>
          Discover amazing products at unbeatable prices. From electronics to fashion, we have it
          all!
        </p>
        <Link
          to='/products'
          className='inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300 transform hover:-translate-y-1'
        >
          Browse All Products →
        </Link>
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
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full animate-pulse'></div>
            </div>
            <p className='mt-4 text-gray-600 font-medium text-center'>Loading products...</p>
          </div>
        </div>
      ) : (
        <>
          <div className='mb-8 flex flex-col md:flex-row justify-between items-center gap-4'>
            <h3 className='text-2xl font-bold text-gray-800'>
              Featured Products
              <span className='text-lg font-normal text-gray-500 ml-2'>
                ({filteredProducts?.length || 0} items)
              </span>
            </h3>
            <Link
              to='/products'
              className='text-purple-600 hover:text-purple-700 font-semibold flex items-center'
            >
              View All Products →
            </Link>
          </div>

          {filteredProducts?.length === 0 ? (
            <div className='text-center py-16 bg-white rounded-2xl shadow-lg'>
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>No products found</h3>
              <p className='text-gray-600 mb-4'>Try a different search or category</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('');
                }}
                className='bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300'
              >
                Show All Products
              </button>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
              {filteredProducts?.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Features Section */}
      <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='bg-white p-6 rounded-2xl shadow-lg text-center'>
          <div className='text-4xl mb-4'>🚚</div>
          <h4 className='text-xl font-bold text-gray-800 mb-2'>Free Shipping</h4>
          <p className='text-gray-600'>On orders over $50</p>
        </div>
        <div className='bg-white p-6 rounded-2xl shadow-lg text-center'>
          <div className='text-4xl mb-4'>💳</div>
          <h4 className='text-xl font-bold text-gray-800 mb-2'>Secure Payment</h4>
          <p className='text-gray-600'>100% secure transactions</p>
        </div>
        <div className='bg-white p-6 rounded-2xl shadow-lg text-center'>
          <div className='text-4xl mb-4'>↩️</div>
          <h4 className='text-xl font-bold text-gray-800 mb-2'>Easy Returns</h4>
          <p className='text-gray-600'>30-day return policy</p>
        </div>
      </div>
    </>
  );
};

export default Home;
