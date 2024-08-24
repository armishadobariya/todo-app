import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export interface CommonCategoryHeaderProp {
    indexName: string,
    taskType: string
    active: string
}

export interface CommonCategoryData {
    title?: string | undefined
}

export const CommonCategory = ({ indexName, taskType, active, title }: CommonCategoryHeaderProp & CommonCategoryData) => {
    return (
        <>
            <div className='w-full border border-gray rounded-md'>
                <div className='flex justify-between'>
                    <h4 className='text-base font-semibold py-4 pl-5'>{indexName}</h4>
                    <h4 className='text-base font-semibold py-4 pl-5'>{taskType}</h4>
                    <h4 className='text-base font-semibold py-4 pl-5'>{active}</h4>
                </div>
                <div>
                    <span>{title}</span>

                    <div>
                        <div className='flex items-center gap-2 bg-buttonOrange'>
                            <Image src={'/images/category/edit.svg'}
                                width={19}
                                height={19}
                                alt='edit'
                            />
                            <Button>
                                Edit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
