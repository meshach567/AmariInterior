import Link from 'next/link'
import React from 'react';
import Carousel from '@/components/ui/Carousel';
import { heroCarouselImage } from '@/constants/menus';

const Hero = () => {   

  return (
    <div className='bg-slate-900 h-auto  w-full'>
        <div className='flex flex-row p-[2rem] space-x-8 items-center justify-around'>
            <div className="flex flex-col  space-y-8">
                <h1 className='text-amber-200 font-medium md:text-[2rem] leading-12'>Modern Interior Design Studio</h1>
                <span className='max-w-[500px] text-justify text-amber-300 leading-6'>Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. With a keen eye for detail and a creative flair, an interior designer is someone who plans, researches, coordinates, and manages such enhancement projects.</span>
                <div className='flex items-center space-x-4 '>
                    <Link className='bg-amber-400 text-slate-900 rounded-[2rem] px-7 py-3 hover:bg-amber-500 transition-all whitespace-nowrap' href="/shop-now">Shop Now</Link>
                    <Link href="#explore-now" className=' bg-transparent rounded-[2rem] px-7 py-3 border-[2px] border-gray-200 text-amber-400 hover:bg-amber-500 hover:text-black transition-all whitespace-nowrap' >Explore Now</Link>
                </div>
            </div>

            {/* Carousel  */}
            <div>
                <div className='carousel-wrapper'>
                <Carousel images={heroCarouselImage} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero