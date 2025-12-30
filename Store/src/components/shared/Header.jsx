import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import metLogo from '../../assets/met.png';
import Heart from './heart';

export default function Header() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Asia', path: '/asia' },
    { name: 'Italy', path: '/italy' },
    { name: 'Japan', path: '/japan' },
  ];

  return (
    <header className='sticky top-0 z-50 w-full  bg-white shadow-sm my-6'>
      <div className='container mx-auto flex items-end justify-between px-4 py-5'>
        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          className='cursor-pointer flex items-center text-2xl font-bold px-10'
        >
          <img src={metLogo} alt='Logo' className='h-10 w-10 mr-2 ' />
        </div>

        {/* Desktop navs */}
        <nav className='hidden md:block absolute left-1/2 transform -translate-x-1/2'>
          <ul className='flex gap-6 justify-center text-xl'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className='hover:text-blue-500 transition-colors'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className=' items-end justify-between px-11 pb-0 self-end'>
          <Heart />
        </div>
        {/* hamburger mobile menu */}
        <button
          className='md:hidden text-xl focus:outline-none'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-white border-t py-4 px-4'>
          <ul className='flex flex-col gap-3 text-right'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className='block py-1 text-xl hover:text-blue-500 transition-colors'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
