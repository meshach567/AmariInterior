import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-slate-950 h-full w-full'>
            <div className='flex flex-col space-y-6 w-[85%] mx-auto'>
                <h2>Amari.</h2>
                <div className='flex flex-row '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aperiam itaque temporibus perferendis deserunt, iure nihil error explicabo repudiandae voluptas magni accusantium, molestias earum. Saepe facilis perferendis esse magni animi.</p>
                    <div className=''>
                        <li>
                            <Link href=""></Link>
                        </li>
                        <li>
                            <Link href=""></Link>
                        </li>
                        <li>
                            <Link href=""></Link>
                        </li>
                        <li>
                            <Link href=""></Link>
                        </li>
                        <li>
                            <Link href=""></Link>
                        </li>
                        <li>
                            <Link href=""></Link>
                        </li>
                        <li>
                            <Link href=""></Link>
                        </li>
                        <li>
                            <Link href=""></Link>
                        </li>
                        <li>
                            <Link href=""></Link>
                        </li>
                        <li>
                            <Link href=""></Link>
                        </li>
                        <li>
                            <Link href=""></Link>
                        </li>
                        <li>
                            <Link href=""></Link>
                        </li>
                    </div>
                </div>
                <div className=''>
                    <Link href="https://www.linkedin.com/in/meshach-ekene"></Link>
                    <Link href="https://www.facebook.com/arinze.meshachekene"></Link>
                    <Link href="https://twitter.com/ArinzeMeshach"></Link>
                    <Link href="https://instagram.com/arinzemeshach"></Link>
                </div>
                <div>
                    <div>Copyright 2022 <Link href="mailto:meshacharinze@gmail.com">meshacharinze@gmail.com</Link>All Right Reserved</div>

                    <div>
                        <span>Term & Condition</span>
                        <span>Privacy & Policy </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;