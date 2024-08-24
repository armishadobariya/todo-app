import Image from 'next/image'
import React from 'react'
import { AddTask } from '../add-task-modal';
import Task from '../task';

export const DashboardTodoList = () => {

    const date = new Date()
    const newDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}`;


    return (
        <div className="w-full shadow-md p-6 rounded-lg">
            <div className="flex flex-col gap-3 mb-3">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <div>
                            <Image
                                src={'/images/dashboard/pending-task.svg'}
                                width={28}
                                height={31}
                                alt="pending-task"
                            />
                        </div>
                        <h3 className='text-sm font-medium text-orange'>To-Do</h3>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Image
                            src={'/images/dashboard/add-icon.svg'}
                            width={15}
                            height={15}
                            alt="add-task"
                        />
                        {/* <h3 className='text-xs font-normal text-gray'>Add task</h3> */}
                        <AddTask />
                    </div>
                </div>
                <div>
                    <h3 className='text-sm font-medium'>{newDate}</h3>
                </div>
            </div>

            <div>
                <Task />
            </div>
        </div>
    )
}
