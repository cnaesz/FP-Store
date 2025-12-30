export default function Heart() {
  return (
    <button
      className=' px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out '
      aria-label='heart'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className='lucide lucide-heart-icon lucide-heart '
      >
        <path d='M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5' />
      </svg>
      <span className='py-3 absolute inset-0 object-right-top -mr-6'>
        <div className='inline-flex items-center px-1.5 pb-0 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white'>
          6
        </div>
      </span>
    </button>
  );
}
