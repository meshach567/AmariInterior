import Link from 'next/link';
import React, { JSX, ReactNode } from 'react';
import cx from 'clsx';
import Carousel from '../../ui/Carousel/Carousel';
import { heroCarouselImage } from '@/data/menus.data';


export type HeroType = {
  title?: string;
  label?: string,
  removeHeroTitle?: boolean;
  cssClasses?: string;
  cleanMainCss?: boolean;
  addBelowLabel?: ReactNode;
};

const Hero: React.FunctionComponent<HeroType> = ({
  title = 'Modern Interior Design Studio',
  label = "Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space.With a keen eye for detail and a creative flair, an interior designer is someone whoplans, researches, coordinates, and manages such enhancement projects.",
  removeHeroTitle = false,
  cssClasses = '',
  cleanMainCss = false,
  addBelowLabel,
}): JSX.Element => {
  return (
    <div className={cx(cssClasses, { "h-full w-full bg-slate-900": !cleanMainCss, })}>
      <div className="flex flex-row items-center justify-around space-x-8 p-[2rem]">
        <div className="flex flex-col space-y-8">
          <h1 className="leading-12 font-medium text-amber-200 md:text-[2rem]">
            {title}
          </h1>
          {!removeHeroTitle && (<span className="max-w-[500px] text-justify leading-6 text-amber-300">
            {label}
          </span>)}

          <div className="flex items-center space-x-4">
            <Link
              className="whitespace-nowrap rounded-[2rem] bg-amber-400 px-7 py-3 text-slate-900 transition-all hover:bg-amber-500"
              href="/shop-now"
            >
              Shop Now
            </Link>
            <Link
              href="#explore-now"
              className="whitespace-nowrap rounded-[2rem] border-[2px] border-gray-200 bg-transparent px-7 py-3 text-amber-400 transition-all hover:bg-amber-500 hover:text-black"
            >
              Explore Now
            </Link>
          </div>
        </div>
        {addBelowLabel && <>{addBelowLabel}</>}

        {/* Carousel  */}
        <div>
          <div className="carousel-wrapper">
            <Carousel images={heroCarouselImage} />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Hero;
