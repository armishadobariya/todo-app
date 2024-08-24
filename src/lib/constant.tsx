import Image from "next/image"
import React from "react"

export enum path {
    Home = "/",
    Login = "/login",
    Register = "/register"
}

//  define NavItem props
export type NavItem = {
    label: string,
    href: string,
    icon: React.ReactNode,
    activeIcon: React.ReactNode
}

export const defaultNavItems: NavItem[] = [

    {
        label: "Dashboard",
        href: "/",
        icon: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image
                    src={'/images/sidebar/dashboard.svg'}
                    width={24}
                    height={24}
                    alt="Dashboard"
                />
            </div>
        ),
        activeIcon: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image
                    src={'/images/sidebar/dashboard-active.svg'}
                    width={24}
                    height={24}
                    alt="Dashboard"
                />
            </div>
        )
    },
    {
        label: "Vital Task",
        href: "/vital-task",
        icon: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image
                    src={'/images/sidebar/vital.svg'}
                    width={8}
                    height={20}
                    alt="vital-task"
                />
            </div>
        ),
        activeIcon: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image
                    src={'/images/sidebar/vital-active.svg'}
                    width={8}
                    height={20}
                    alt="vital-task"
                />
            </div>
        )
    },
    {
        label: "My Task",
        href: "/my-task",
        icon: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image
                    src={'/images/sidebar/task.svg'}
                    width={24}
                    height={24}
                    alt="task"
                />
            </div>
        ),
        activeIcon: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image
                    src={'/images/sidebar/task-active.svg'}
                    width={24}
                    height={24}
                    alt="task"
                />
            </div>
        )
    },
    {
        label: "Task Categories",
        href: "/task-categories",
        icon: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image
                    src={'/images/sidebar/category.svg'}
                    width={24}
                    height={24}
                    alt="task-categories"
                />
            </div>
        ),
        activeIcon: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image
                    src={'/images/sidebar/category-active.svg'}
                    width={8}
                    height={20}
                    alt="task-category"
                />
            </div>
        )
    },

]