import React from 'react';
import { ShoppingCart, UserRound } from 'lucide-react';

import Link from 'next/link';
import { navMenus } from '@/data/menus.data';

const Navbar = () => {
  return (
    <nav>
      <div></div>

      <div className="md: flex w-full flex-row justify-between bg-slate-900 p-[2rem]">
        <div className="cursor-pointer">
          <h1 className="font-semibold leading-5 text-amber-400 transition-all">
            Amari
          </h1>
        </div>
        <div className="flex hover:text-amber-50">
          <ul className="flex flex-row space-x-6 leading-5">
            {navMenus.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    className="text-amber-400 transition-all hover:text-amber-500 focus:text-amber-500"
                    href={item.href}
                    title="Go to different page"
                    target="_blank"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text flex items-center space-x-3">
          <button className="cursor-pointer text-amber-400 transition-all hover:text-amber-500">
            <ShoppingCart />
          </button>
          <button className="cursor-pointer text-amber-400 transition-all hover:text-amber-500">
            <UserRound />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
