import * as yup from "yup";

export const validationSchema = yup.object({
    firstname: yup
        .string("Enter your Firstname")
        .min(3,"Enter a valid Name")
        .required("Firstname is required"),
    lastname: yup
        .string("Enter your Lastname")
        .min(3,"Enter a valid Name")
        .required("Lastname is required"),
    email: yup
        .string("Enter your Email")
        .email("Enter a valid Email")
        .min(3,"Enter a valid Email")
        .required("Email is required"),
    password: yup
        .string("Enter your Password")
        .min(8,"Password length should be greater than 8 characters")
        .required("Password is required")

})

