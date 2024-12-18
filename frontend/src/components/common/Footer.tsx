import Link from 'next/link';
import React from 'react';
import { footerMenu } from '@/data/footermenu.data';
import { Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="h-full w-full bg-slate-950 ">
      <div className="mx-auto flex w-[80%] flex-col space-y-6 py-8">
        <h2 className='text-amber-200'>Amari.</h2>
        <div className="flex flex-row space-x-32">
          <p className='leading-6 max-w-[500px] text-justify text-amber-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            aperiam itaque temporibus perferendis deserunt, iure nihil error
            explicabo repudiandae voluptas magni accusantium, molestias earum.
            Saepe facilis perferendis esse magni animi.
          </p>
          <ul className="grid grid-cols-4 gap-8">
            {footerMenu.map((item) => {
              return (
                <li key={item.id}>
                  <Link className='text-amber-200' href={item.href}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row space-x-4 ">
          <Link className='bg-amber-400 text-black p-2 rounded-full' href="https://www.linkedin.com/in/meshach-ekene">{<Linkedin />}</Link>
          <Link className='bg-amber-400 text-black p-2 rounded-full' href="https://www.facebook.com/arinze.meshachekene">
          {<Facebook />}
          </Link>
          <Link className='bg-amber-400 text-black p-2 rounded-full' href="https://twitter.com/ArinzeMeshach">{<Twitter />}</Link>
          <Link className='bg-amber-400 text-black p-2 rounded-full' href="https://instagram.com/arinzemeshach">{<Instagram />}</Link>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <div className='text-amber-200'>
            Copyright 2022{' '}
            <Link  href="mailto:meshacharinze@gmail.com">
              meshacharinze@gmail.com
            </Link>
            All Right Reserved
          </div>

          <div className='flex space-x-4 '>
            <span className='text-amber-200'>Term & Condition</span>
            <span className='text-amber-200'>Privacy & Policy </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
