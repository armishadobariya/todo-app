import React from 'react'
import { Input } from '../ui/input'
import Image from 'next/image'

export const Search = () => {
    return (
        <div className='flex items-center w-[700px]'>
            <Input
                placeholder='Search your task here...'
                className='bg-offWhite border-0 !focus:ring-0 !focus:outline-none ring-0 outline-none outline-0 h-8 shadow-md rounded-md 2xl:w-full w-1/2'
            />
            <div className='bg-orange p-[10px] rounded-md'>
                <Image
                    src={'/images/common/Search.svg'}
                    width={15}
                    height={15}
                    alt={'search'}

                />
            </div>
        </div>
    )
}
