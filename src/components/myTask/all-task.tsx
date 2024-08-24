import React from 'react'
import Task from '../task'
import Image from 'next/image'

export const AllTask = () => {
    return (
        <div className="grid grid-cols-2 h-[calc(100vh-173px)] overflow-auto gap-5">
            <div className='border border-gray rounded-2xl py-5 px-7 shadow-md flex flex-col gap-4'>
                <div>
                    <h4 className="text-base font-semibold">My Tasks</h4>
                </div>
                <Task />
            </div>
            <div className='border border-gray rounded-2xl py-5 px-7 shadow-md flex flex-col gap-4'>
                <div>
                    <Image
                        src={'/images/temp/task1.png'}
                        width={160}
                        height={160}
                        alt="todo-task"
                    />
                </div>
            </div>
        </div>
    )
}
