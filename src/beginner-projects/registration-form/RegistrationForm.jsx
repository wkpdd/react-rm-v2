import React from "react";
import {validationSchema} from "./validators.jsx";
import {useFormik} from "formik";
import {Button, Card, CardContent, CardHeader, TextField} from "@mui/material";
import "./RegistrationForm.css"

function RegistrationForm(){
    /* Let's try formik */
    const formik  = useFormik({
        initialValues: {
            firstname:"John",
            lastname:"Cena",
            email:"test@codeonthefly.com",
            password:"hello-world"
        },
        validationSchema: validationSchema,
        onSubmit: (values)=>{
            console.table(values)
        }
    })

    return(
        <Card className={"card"}>
            <CardHeader
                title={"Registration Form"}
            />
            <CardContent>
                <form onSubmit={formik.handleSubmit} className={"form"}>
                    <TextField
                        // fullWidth
                        className={"field"}
                        id={"firstname"}
                        name={"firstname"}
                        label={"firstname"}
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                        helperText={formik.touched.firstname && formik.errors.firstname}
                    />
                    <TextField
                        // fullWidth
                        className={"field"}
                        id={"lastname"}
                        name={"lastname"}
                        label={"lastname"}
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                        helperText={formik.touched.lastname && formik.errors.lastname}
                    />
                    <TextField
                        // fullWidth
                        className={"field"}
                        id={"email"}
                        name={"email"}
                        label={"email"}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        // fullWidth
                        className={"field"}
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button variant={"contained"} type={"submit"}>Submit</Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default RegistrationForm