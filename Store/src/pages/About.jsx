import React from 'react';

const About = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>About ShopEasy</h1>
        <p className='text-xl text-gray-600'>Your trusted online shopping destination</p>
      </div>

      <div className='bg-white rounded-2xl shadow-lg p-8 mb-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Our Story</h2>
        <p className='text-gray-600 mb-4'>
          Welcome to ShopEasy, where shopping meets convenience and quality. Founded in 2024, we
          started with a simple mission: to make online shopping easy, enjoyable, and accessible for
          everyone.
        </p>
        <p className='text-gray-600'>
          Our journey began with a small team of passionate individuals who believed that everyone
          deserves access to quality products without the hassle. Today, we're proud to serve
          thousands of customers worldwide with our curated selection of products.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
        <div className='bg-white rounded-2xl shadow-lg p-8'>
          <div className='text-4xl mb-4'>🎯</div>
          <h3 className='text-xl font-bold text-gray-800 mb-3'>Our Mission</h3>
          <p className='text-gray-600'>
            To simplify online shopping by providing a seamless experience, quality products, and
            exceptional customer service.
          </p>
        </div>

        <div className='bg-white rounded-2xl shadow-lg p-8'>
          <div className='text-4xl mb-4'>💡</div>
          <h3 className='text-xl font-bold text-gray-800 mb-3'>Our Vision</h3>
          <p className='text-gray-600'>
            To become the most trusted and preferred online shopping platform for customers
            worldwide.
          </p>
        </div>
      </div>

      <div className='bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-2xl p-8'>
        <h2 className='text-2xl font-bold mb-4'>Why Choose ShopEasy?</h2>
        <ul className='space-y-3'>
          <li className='flex items-center'>
            <span className='mr-3'>✓</span>
            <span>Curated selection of quality products</span>
          </li>
          <li className='flex items-center'>
            <span className='mr-3'>✓</span>
            <span>Secure and easy payment options</span>
          </li>
          <li className='flex items-center'>
            <span className='mr-3'>✓</span>
            <span>Fast and reliable delivery</span>
          </li>
          <li className='flex items-center'>
            <span className='mr-3'>✓</span>
            <span>Excellent customer support</span>
          </li>
          <li className='flex items-center'>
            <span className='mr-3'>✓</span>
            <span>User-friendly interface</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
