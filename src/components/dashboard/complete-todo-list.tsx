import Image from 'next/image'
import React from 'react'

export const CompleteTodoList = () => {

    interface todoDataType {
        id: number,
        title: string,
        desc: string,
        status: "Completed",
        completed: string,
        img: string
    }

    const TodoData: todoDataType[] = [
        {
            id: 1,
            title: "Walk the dog",
            desc: "Take the dog to the park and bring treats as well.",
            status: "Completed",
            completed: "complted 2 days ago",
            img: "/images/temp/task1.png"
        },
        {
            id: 2,
            title: "Attend Nischal’s Birthday Party",
            desc: "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....",
            status: "Completed",
            completed: "complted 2 days ago",
            img: "/images/temp/task1.png"
        },

    ]
    return (
        <div>



            <div className="w-full shadow-md p-6 rounded-lg">
                <div className="flex flex-col gap-3 mb-3">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1'>
                            <div>
                                <Image
                                    src={'/images/dashboard/done-task.svg'}
                                    width={21}
                                    height={24}
                                    alt="pending-task"
                                />
                            </div>
                            <h3 className='text-sm font-medium text-orange'>Completed Task</h3>
                        </div>
                    </div>

                </div>

                <div>
                    <div className='flex flex-col gap-4 p-2 '>
                        {TodoData?.map((item) => {
                            return (
                                <div key={item?.id} className='border border-gray rounded-2xl p-3'>
                                    <div className='flex items-center justify-between gap-3'>
                                        <div>
                                            <div>
                                                <h5 className="text-lg font-semibold">{item?.title}</h5>
                                            </div>
                                            <p className="text-textGray text-base mt-2">{item?.desc}</p>
                                        </div>
                                        <div className='rounded-lg mb-4 pr-5 w-[88px] h-[88px]'>
                                            <Image
                                                src={item?.img}
                                                width={88}
                                                height={88}
                                                alt='task-img'
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className='flex items-center gap-4'>
                                            <div className='flex items-center '>
                                                <h3 className='text-sm font-normal'>Status:</h3>
                                                <span className='text-sm font-normal text-textRed'>{item?.status}</span>
                                            </div>
                                        </div>
                                        <div className='text-xs font-normal text-gray flex'>
                                            <span>{item?.completed}</span>
                                        </div>
                                    </div>


                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
