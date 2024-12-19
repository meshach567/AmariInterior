import React, { JSX, ReactNode } from 'react';
import cx from 'clsx';
const Navbar = dynamic(() => import('../Navbar/Navbar'), {
  ssr: false,
});
const Footer = dynamic(() => import('../Footer/Footer'), {
  ssr: false,
});
import LoadingDots from '../../ui/LoadingDots';
import dynamic from 'next/dynamic';
import { HeroType } from '../Hero/Hero';

const Loading = () => (
    <div className="w-80 h-80 flex items-center text-center justify-center p-3">
        <LoadingDots />
    </div>

)

const dynamicProps = {
    loading: Loading,
};


const Hero = dynamic(() => import('../Hero/Hero'), {
    ssr: false,
    ...dynamicProps,
});

type Layout = {
    children?: ReactNode;
    cssClasses?: string;
    useHero?: boolean;
    cleanMainCss?: boolean;
    heroDetails?: HeroType;
};

const Layout: React.FunctionComponent<Layout> = ({
    children,
    cssClasses = '',
    useHero = true,
    cleanMainCss = false,
    heroDetails = {},
}): JSX.Element => {
    return (
        <div className="w-full h-auto ">
            <header className="w-full">
                <Navbar />
            </header>
            {useHero ?  '' : <Hero {...heroDetails} />}
            <main
                className={cx(
                    cssClasses,
                    {
                        'w-full min-h-[70vh] pt-[70px] p-[25px] md:p-[50px]': !cleanMainCss,
                    },
                    'relative'
                )}
            >
                {children}
            </main>
            <Footer />
        </div>

    )
}

export default Layout