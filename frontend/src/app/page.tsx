'use client';
import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('../components/layouts/Hero'), {
  ssr: false,
});
const Navbar = dynamic(() => import('../components/layouts/Navbar'), {
  ssr: false,
});
const Footer = dynamic(() => import('../components/layouts/Footer'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <NoSSR />
      <Footer />
    </>
  );
}
