import React from 'react'
import { CommonCategory } from '../common/common-category'
import { Divide } from 'lucide-react'

interface statusDataProp {
    id: number
    title: string
}

export const CategoryInfo = () => {
    const statusData: statusDataProp[] = [{
        id: 1,
        title: "Complete"
    },
    {
        id: 2,
        title: "In Progress"
    },
    {
        id: 3,
        title: "Not Started"
    }]
    return (
        <>
            <div>
                <CommonCategory
                    indexName="SN"
                    taskType="Task Status"
                    active="Active"
                    {...statusData?.map((item) => {


                    })}
                />
            </div>
        </>
    )
}
