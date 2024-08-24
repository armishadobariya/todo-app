import React from 'react'
import { ThemeToggle } from './theme-toggle'
import { Search } from './common/search';

export const Header = () => {

    const date = new Date()
    const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    const day = new Date().getDay();
    return (
        <header className='h-24 bg-lightOrange flex items-center px-20 justify-between shadow-md sticky top-0'>
            {/* <div className='flex items-center '> */}

            <h2 className='text-3xl font-semibold '>Dashboard</h2>

            <div className='ml-auto'>
                <Search />
            </div>
            <div className='ml-auto flex items-center'>
                <ThemeToggle />
                <div className='flex flex-col'>
                    <h3 className='text-sm font-medium'>{day === 0 ? "Sunday" : day === 1 ? "Monday" : day === 2 ? "Tuesday" : day === 3 ? "Wednesday" : day === 4 ? "Thursday" : day === 5 ? "Friday" : "Saturday"}</h3>
                    <h4 className='text-sm font-medium text-[#3ABEFF]'>{currentDate}</h4>
                </div>
            </div>
            {/* </div> */}
        </header>
    )
}
