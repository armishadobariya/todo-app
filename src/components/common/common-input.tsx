import { Field } from 'formik'
import React from 'react'

export interface InputProp
    extends React.InputHTMLAttributes<HTMLInputElement> {
    typeProp: "text" | "number" | "email" | "password",
    nameProp: string,
    placeholderProp?: string,
    errorProp?: string | undefined
    touchedProp?: boolean | undefined
    classNameProp?: string
}


export const CommonInput = ({ typeProp, nameProp, placeholderProp, errorProp, touchedProp, classNameProp }: InputProp) => {
    return (
        <>
            <Field
                type={typeProp}
                name={nameProp}
                placeholder={placeholderProp}
                className={`flex h-9 w-full rounded-md border bg-background px-3 py-2 text-sm  border-gray file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 ${errorProp && touchedProp ? 'border-red' : ''} ${classNameProp}`}

            />
            {errorProp && touchedProp ? <div className="error text-red-600 text-left pl-3 text-sm">{errorProp}</div> : null}
        </>
    )
}
