import React from 'react';

const ProductCard = ({ product }) => {
  const stars = Math.round(product.rating?.rate || 0);

  return (
    <div className='bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl group'>
      <div className='relative h-48 overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50'>
        <img
          src={product.image}
          alt={product.title}
          className='w-full h-full object-contain p-4 group-hover:scale-110 transition duration-500'
          loading='lazy'
        />
        <div className='absolute top-3 right-3'>
          <span className='bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full'>
            -25%
          </span>
        </div>
      </div>

      <div className='p-6'>
        <div className='flex justify-between items-start mb-2'>
          <span className='text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full capitalize'>
            {product.category}
          </span>
          <span className='text-xl font-bold text-gray-800'>
            ${product.price}
            <span className='text-sm text-gray-500 font-normal line-through ml-2'>
              ${(product.price * 1.25).toFixed(2)}
            </span>
          </span>
        </div>

        <h3 className='text-lg font-semibold text-gray-800 mb-3 line-clamp-2 h-14'>
          {product.title}
        </h3>

        <div className='flex items-center mb-4'>
          <div className='flex text-yellow-400'>
            {'★'.repeat(stars)}
            {'☆'.repeat(5 - stars)}
          </div>
          <span className='text-sm text-gray-500 ml-2'>({product.rating?.count || 0})</span>
        </div>

        <button className='w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition duration-300 transform hover:-translate-y-1 flex items-center justify-center'>
          <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
