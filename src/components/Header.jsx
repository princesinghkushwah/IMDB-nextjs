import React from 'react'
import MenuItem from './MenuItem'

import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import Link from 'next/link'


const Header = () => {
    return (
        <div className='flex justify-between mx-2 py-6 max-w-6xl sm:mx-auto items-center'>
            <div className='flex '>
                <MenuItem title={"HOME"} address="/" Icon={AiFillHome} />
                <MenuItem title={"ABOUT"} address="/about" Icon={AiFillInfoCircle} />
            </div>
            <div className=''>
                <Link href={"/"}>
                <h2 className='text-2xl'>
                    <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>
                        IMDB
                    </span>
                </h2></Link>
            </div>
        </div>
    )
}

export default Header
