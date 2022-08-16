import React from "react";
import { validationSchema } from "../registration-form/validators";
import { useFormik } from "formik";
import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import "./RegistrationForm.css"
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

export default function Auth0Dev() {
    const { loginWithRedirect, logout, isLoading, isAuthenticated } = useAuth0();
    const formik = useFormik({
        initialValues: {
            firstname: "John",
            lastname: "Cena",
            email: "test@codeonthefly.com",
            password: "hello-world"
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.table(values)
            loginWithRedirect()
        }
    })

    const handleLogOut = async ()=>{
        await logout()
    }
    console.log(isAuthenticated);
    return (
        
            <div>
                { isAuthenticated ? <Button variant={"contained"} onClick={handleLogOut}>Logout</Button>:<Card className={"card"}>
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
                        <br />
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
                        <br />
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
                        <br />
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
                        <br />
                        <div className="buttons">
                            <Button variant={"contained"} type={"submit"} >Login</Button>
                            
                        </div>
                    </form>
                </CardContent>
            </Card>
        }
            </div>
    )
}