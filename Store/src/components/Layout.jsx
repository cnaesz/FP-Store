import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-blue-50'>
      <header className='bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center space-x-2 mb-4 md:mb-0'>
              <Link to='/' className='flex items-center space-x-2'>
                <div className='bg-white p-2 rounded-full float-animation'>
                  <svg className='w-8 h-8 text-purple-600' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M10 2a4 4 0 00-4 4v4H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 10h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h1 className='text-3xl font-bold'>ShopEasy</h1>
                  <p className='text-sm text-purple-100'>Everything you need, delivered easy</p>
                </div>
              </Link>
            </div>

            <nav className='flex items-center space-x-6'>
              <Link to='/' className='hover:text-purple-200 transition duration-300 font-medium'>
                Home
              </Link>
              <Link
                to='/products'
                className='hover:text-purple-200 transition duration-300 font-medium'
              >
                All Products
              </Link>
              <Link
                to='/about'
                className='hover:text-purple-200 transition duration-300 font-medium'
              >
                About Us
              </Link>
              <Link
                to='/contact'
                className='hover:text-purple-200 transition duration-300 font-medium'
              >
                Contact Us
              </Link>

              <button className='bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition duration-300'>
                <span className='flex items-center'>
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                  Cart
                  <span className='ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                    0
                  </span>
                </span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className='container mx-auto px-4 py-8'>
        <Outlet />
      </main>

      <footer className='mt-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <h2 className='text-2xl font-bold'>ShopEasy</h2>
              <p className='text-gray-300'>© 2024 All rights reserved</p>
            </div>
            <div className='flex space-x-6'>
              <Link to='/' className='text-gray-300 hover:text-white transition duration-300'>
                Home
              </Link>
              <Link to='/about' className='text-gray-300 hover:text-white transition duration-300'>
                About
              </Link>
              <Link
                to='/contact'
                className='text-gray-300 hover:text-white transition duration-300'
              >
                Contact
              </Link>
              <Link
                to='/products'
                className='text-gray-300 hover:text-white transition duration-300'
              >
                Products
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
