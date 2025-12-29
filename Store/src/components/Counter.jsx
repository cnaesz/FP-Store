import useCounter from '../hooks/useCounter';

export default function Counter() {
  const { count, increment, decrement } = useCounter(100);

  return (
    <div className='flex items-center gap-4'>
      <button onClick={increment} className='px-4 py-1 bg-green-500 text-white rounded-sm'>
        +
      </button>
      <span>{count}</span>
      <button onClick={decrement} className='px-4 py-1 bg-red-500 text-white rounded-sm'>
        -
      </button>
    </div>
  );
}
