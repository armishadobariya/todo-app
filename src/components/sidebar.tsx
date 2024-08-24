"use client"
import { NavItem, defaultNavItems } from '@/lib/constant'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


type prop = {
    navItems: NavItem[]
}
export const Sidebar = ({ navItems = defaultNavItems }: prop) => {
    const pathname = usePathname()
    const isActive = (href: string) => {
        return pathname === href || pathname.startsWith(`${href}/`)
    }
    return (
        // <section className='position-relative'>
        <div className='bg-orange h-[calc(100vh-152px)]  w-80 p-5 rounded-r-md sticky bottom-0'>
            <div className='flex flex-col justify-center items-center mb-5 -mt-[23%]'>
                <div className='rouned-full w-[86px] h-[86px]'>
                    <Image
                        src={'/images/temp/temp-user.png'}
                        width={86}
                        height={86}
                        alt="user"
                    />
                </div>
                <div>
                    <h3 className='text-base font-semiBold text-white'>Sundar Gurung</h3>
                    <span className="text-xs font-normal text-white">sundargurung360@gmail.com</span>
                </div>
            </div>
            <nav>
                <ul className='flex flex-col gap-2'>
                    {navItems?.map((item) => {
                        const active = isActive(item.href)
                        return (
                            <li
                                key={item.href}
                                // className='text-sm  font-medium '
                                className={cn({
                                    "text-base font-medium text-white h-14 flex ": true,
                                    "bg-white text-orange rounded-xl": active,

                                }
                                )}
                            >
                                <Link href={item.href} className='flex items-center gap-4 pl-4'>
                                    {active && active ? item.activeIcon : item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        </div>
        // </section >
    )
}
