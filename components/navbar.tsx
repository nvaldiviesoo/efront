import React, { useState } from 'react';

import { BsBag, IoPersonOutline, AiOutlineHeart } from '../utils/icons';
import SearchBar from './searchBar';

const Navbar = () => {

  const [input, setInput] = useState('');

  return (
    <nav className='bg-gray-white border shadow'>
      <div className='mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          <div className='flex flex-1 sm:items-stretch sm:justify-end sm:pr-44 sm:space-x-8'>
            <h1 className='text-sm font-semibold'>MUJER</h1>
            <h1 className='text-sm font-semibold'>HOMBRE</h1>
            <h1 className='text-sm font-semibold'>ACCESORIOS</h1>
          </div>
          <div className='flex items-center justify-end sm:items-stretch sm:justify-end'>
            <SearchBar input={input} setInput={setInput}/>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center gap-x-8 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <AiOutlineHeart className=' cursor-pointer' size={20} />
            <IoPersonOutline className='cursor-pointer ' size={20} />
            <BsBag className='cursor-pointer' size={20} />

            <div className='relative ml-3'>
              <div>
                <button
                  type='button'
                  className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  id='user-menu-button'
                  aria-expanded='false'
                  aria-haspopup='true'
                >
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>Open user menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
