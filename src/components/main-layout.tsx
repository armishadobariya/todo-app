import React from 'react'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { defaultNavItems } from '@/lib/constant'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (

        <main>
            <Header />
            <div className="h-[56px] w-full">
            </div>
            <div className="flex flex-1">
                <Sidebar navItems={defaultNavItems} />
                <div className="flex-1 overflow-y-auto px-20">{children}</div>
            </div>

        </main>
    )
}
