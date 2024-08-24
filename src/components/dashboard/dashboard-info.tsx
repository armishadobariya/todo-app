import React from 'react'
import { DashboardHeader } from './dashboard-header'
import { DashboardTodoList } from './dashboard-todo-list'
import { CompleteTodoList } from './complete-todo-list'

export const DashboardInfo = () => {
    return (
        <section className='flex flex-col gap-8  '>
            <div>
                <DashboardHeader />
            </div>
            <div className='grid grid-cols-2 gap-4 border-[1.5px] border-gray-100 rounded-md p-5'>
                <DashboardTodoList />
                <div>
                    <CompleteTodoList />
                </div>
            </div>
        </section>
    )
}
