import { NavProps, NavIcons } from '@/types/user';

export const navMenus: NavProps = [
  {
    id: '1',
    href: '/',
    title: 'Home',
    target:'_self',
    sub_title: 'Stay at home pae'
  },
  {
    id: '2',
    href: '/about-us',
    title: 'About Us',
    target: '_blank',
    sub_title: "Go to about us"
  },
  {
    id: '3',
    href: '/services',
    title: 'Services',
    target: '_blank',
    sub_title: "Go to Services"
  },
  {
    id: '4',
    href: '/blog',
    title: 'Blog',
    target: '_blank',
    sub_title: "Go to Blog"
  },
  {
    id: '5',
    href: '/contact-us',
    title: 'Contact',
    target: '_blank',
    sub_title: "Go to Contact"
  },
];

export const heroCarouselImage: string[] = [
  '/assets/onegoldchair.png',
  '/assets/oneroundbottomchair.png',
  '/assets/onesinglechair.png',
];

export const navIcons: NavIcons = [
  {
    id: '1',
    icon: '',
  },
  {
    id: '2',
    icon: '2',
  },
];
