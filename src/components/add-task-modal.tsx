import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AddTaskForm } from "./form/add-task-form"
import Link from "next/link"
// import dynamic from 'next/dynamic';

// const AddTaskForm = dynamic(() => import('./form/add-task-form'), { ssr: false });

export const AddTask = () => {
    return (
        <Dialog >
            <DialogTrigger className='text-xs font-normal text-gray'>Add task</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-between">
                        <span>
                            Add New Task
                        </span>
                        <Link href={"/"}
                            className="text-sm font-semibold "
                        >Go Back</Link>

                    </DialogTitle>
                    <DialogDescription> 

                    </DialogDescription>
                </DialogHeader>
                <div>
                    <AddTaskForm />
                </div>
            </DialogContent>
        </Dialog>

    )
}
