import Link from 'next/link'
import React from 'react'
import { arrCardSet } from './material.data'
import Image from 'next/image'

const Material = () => {
    return (
        <div className='w-full  bg-neutral-900'>
            <div className='w-[80%] flex flex-row py-14 px-6 space-x-16 mx-auto'>

                <div className='flex flex-col space-y-6'>
                    <h2 className='leading-10 text-[2rem] text-amber-300'>Crafted with excellent Material</h2>
                    <p className='max-w-[300px] text-justify leading-8 text-amber-300' text-amber-300>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat earum repellat dolorem doloribus numquam blanditiis deserunt aspernatur! Ea saepe aperiam asperiores magni totam nostrum, quo assumenda, quae ipsa in ad?</p>
                    <Link className='bg-amber-300 w-[8rem] text-center rounded-3xl px-8 py-3' href="#explore">Explore</Link>
                </div>
                {arrCardSet.map((item) => {
                    return <div key={item.id} className='relative max-w-[400px] hover:opacity-100'>
                        <Image className='object-fit object-cover h-auto w-full' src={item.img} alt="images" width={200} height={200} quality={75} priority />
                        <div key={item.obj.id} className='absolute bottom-0 top-0 bg-black bg-slate-600 text-[#f1f1f1] w-full transition-all opacity-0 text-white p-5 text-center'>
                            <span className='text-amber-300'>{item.obj.title}</span>
                            <span className='text-amber-300'>{item.obj.price}</span>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Material;