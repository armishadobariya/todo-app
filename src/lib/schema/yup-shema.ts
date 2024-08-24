import { describe } from "node:test";
import * as Yup from "yup";

export const AddTaskFormSchema = Yup.object({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Title is Required"),
  description: Yup.string()
    .min(3, "Description is Too Short!")
    .required("Description is Required"),
});
