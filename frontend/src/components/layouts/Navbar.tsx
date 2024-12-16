import React from 'react';
import { ShoppingCart, UserRound } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navMenus } from '@/constants/menus';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>

      <div>

      </div>

      <div className='flex flex-row justify-between w-full p-[2rem] bg-slate-900 md:'>
        <div className='cursor-pointer'>
          <h1 className='text-amber-400 leading-5 transition-all font-semibold'>Amari</h1>
        </div>
        <div className='flex hover:text-amber-50'>
          <ul className='flex flex-row space-x-6 leading-5'>
            { navMenus.map((item) => {
              return <li key={item.id}>
                <Link className='text-amber-400 hover:text-amber-500 focus:text-amber-500 transition-all' href={item.href}>
                {item.title}
              </Link>
              </li>
            })}
          </ul>
        </div>
        <div className='flex items-center space-x-3 text'>
          <button className='text-amber-400 hover:text-amber-500 transition-all cursor-pointer'><ShoppingCart /></button>
          <button className='text-amber-400 hover:text-amber-500 transition-all cursor-pointer'><UserRound /></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;