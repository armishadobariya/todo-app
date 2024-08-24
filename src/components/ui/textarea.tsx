import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  nameProp?: string
  errorProp?: string | undefined
  touchedProp?: boolean | undefined
}


const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, nameProp, errorProp, touchedProp, ...props }, ref) => {
    return (
      <>

        <textarea
          className={cn(
            `flex min-h-[205px] w-full  rounded-md border bg-background px-3 py-2 text-sm font-normal border-gray file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-gray ${errorProp && touchedProp ? 'border-red' : ''}`,
            className

          )}
          name={nameProp}
          ref={ref}
          {...props}
        />
        {errorProp && touchedProp ? <div className="error text-red-600 text-left pl-3 text-sm">{errorProp}</div> : null}
      </>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
