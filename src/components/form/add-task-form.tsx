"use client"
import React from 'react'
import { Form, Formik } from 'formik'
import { DatePicker } from '../date-picker'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { AddTaskFormSchema } from '@/lib/schema/yup-shema'
import { CommonInput } from '../common/common-input'
import Image from 'next/image'
import { Button } from '../ui/button'

export const AddTaskForm = () => {
    const handleSubmit = () => {
    }

    return (

        <Formik
            initialValues={{
                title: "",
                description: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={AddTaskFormSchema}
        >
            {({ errors, touched }) => (
                <div >
                    <Form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-4 border border-gray p-4 rounded-sm'>
                            <div className="flex flex-col gap-2 w-2/3">
                                <label htmlFor="title" className='text-sm font-semibold'>Title</label>
                                <CommonInput
                                    typeProp='text'
                                    nameProp='title'
                                    errorProp={errors.title}
                                    touchedProp={touched.title}

                                />
                            </div>
                            <div className='flex flex-col gap-2 w-2/3'>
                                <label htmlFor="date" className='text-sm font-semibold'>Date</label>
                                <DatePicker />
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <label htmlFor="radio-group" className='text-sm font-semibold'>Priority</label>
                                <RadioGroup className='flex justify-between text-gray text-sm'>
                                    <div className="flex items-center space-x-2">
                                        <label htmlFor="extreme" />Extreme
                                        <RadioGroupItem value="extreme" id="extreme" />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <label htmlFor="moderate" />Moderate
                                        <RadioGroupItem value="moderate" id="moderate" />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <label htmlFor="low" />Low
                                        <RadioGroupItem value="Low" id="low" />
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className='flex w-full gap-9'>
                                <div className='flex flex-col gap-2 w-2/3'>
                                    <label htmlFor="description" className='text-sm font-semibold'>Task Description</label>
                                    <Textarea
                                        placeholder='Start writing here.....'
                                        nameProp='description'
                                        errorProp={errors.description}
                                        touchedProp={touched.description}
                                    />
                                </div>
                                <div className='flex flex-col gap-2 w-1/3'>
                                    <label htmlFor="file-upload" className='text-sm font-semibold'>Upload Image</label>

                                    <div className="file_upload relative border border-gray rounded-lg h-full flex items-center justify-center">
                                        <div className="text-center flex flex-col items-center justify-center">
                                            <Image
                                                src={'/images/task/file.svg'}
                                                width={62}
                                                height={57}
                                                alt="upload image"
                                            />
                                            <div className="input_field flex flex-col w-full text-center">
                                                <div className="flex flex-col mt-6 mb-3 gap-2">
                                                    <span className="text-sm text-gray font-normal">Drag&Drop files here</span>
                                                    <span className="text-sm text-gray font-normal">or</span>
                                                </div>
                                                <label>
                                                    <input className="text-sm cursor-pointer w-full hidden" type="file" multiple />
                                                    <div className="text-sm text-gray  border border-gray rounded-[6px] font-semibold cursor-pointer p-[6px] px-3 ">Browse</div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <Button
                            className='text-white bg-buttonOrange text-sm font-bold py-2 px-6 rounded-md mt-10'
                        >
                            Done
                        </Button>
                    </Form>
                </div >
            )}

        </Formik>

    )
}
