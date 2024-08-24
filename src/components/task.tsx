import Image from 'next/image'
import React from 'react'


interface todoDataType {
    id: number,
    title: string,
    desc: string,
    priority: string,
    status: "Not Started" | "In Progress" | "Completed",
    created_date: string,
    img: string
}

const Task = () => {
    const TodoData: todoDataType[] = [
        {
            id: 1,
            title: "Attend Nischal’s Birthday Party",
            desc: "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....",
            priority: "Moderate",
            status: "Not Started",
            created_date: "01/08/2024",
            img: "/images/temp/task1.png"
        },
        {
            id: 2,
            title: "Attend Nischal’s Birthday Party",
            desc: "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....",
            priority: "Moderate",
            status: "Not Started",
            created_date: "01/08/2024",
            img: "/images/temp/task1.png"
        },
        {
            id: 3,
            title: "Attend Nischal’s Birthday Party",
            desc: "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....",
            priority: "Moderate",
            status: "Not Started",
            created_date: "01/08/2024",
            img: "/images/temp/task1.png"
        },
    ]

    return (
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
                        <div className="flex items-center justify-between">
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center '>
                                    <h3 className='text-sm font-normal'>Priority:</h3>
                                    <span className='text-sm font-normal text-textBlue'>{item?.priority}</span>
                                </div>
                                <div className='flex items-center '>
                                    <h3 className='text-sm font-normal'>Status:</h3>
                                    <span className='text-sm font-normal text-textRed'>{item?.status}</span>
                                </div>
                            </div>
                            <div className='text-xs font-normal text-gray flex'>
                                <h3>Created on:</h3>
                                <span>{item?.created_date}</span>
                            </div>
                        </div>


                    </div>
                )
            })}
        </div>
    )
}

export default Task