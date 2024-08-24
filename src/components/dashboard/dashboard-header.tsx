import Image from 'next/image'
import React from 'react'

export const DashboardHeader = () => {
    return (
        <>
            <div className="flex items-center gap-3">
                <h2 className="text-4xl font-medium">Welcome back, Sundar</h2>
                <div>
                    <Image
                        src={'/images/dashboard/greet.svg'}
                        width={42}
                        height={42}
                        alt="greet"
                    />
                </div>
            </div>
        </>
    )
}
