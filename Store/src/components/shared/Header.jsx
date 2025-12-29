import { Link, useNavigate } from 'react-router-dom';

import Heart from './heart';

export default function Header() {
  const navigate = useNavigate();
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Asia', path: '/asia' },
    { name: 'Italy', path: '/italy' },
    { name: 'Japan', path: '/japan' },
  ];

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white shadow-sm'>
      <div className='container mx-auto flex h-19 pb-0 items-center justify-between px-4'>
        <div onClick={() => navigate('/')} className='cursor-pointer text-2xl font-bold'>
          <img src='../../assets/met.png' alt='Logo' className='h-10 w-10 inline-block mr-2' />
        </div>
        <nav className='absolute left-1/2 transform -translate-x-1/2'>
          <ul className='flex gap-6 justify-center text-xl'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className='hover:text-blue-500 transition-colors'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Heart />
      </div>
    </header>
  );
}
