import React from "react";
import { Button, Card, CardContent, CardHeader, CircularProgress } from "@mui/material";
import "./RegistrationForm.css"
import { useAuth0 } from "@auth0/auth0-react";

export default function Auth0Dev() {
    const { loginWithRedirect, logout, isLoading, isAuthenticated, user } = useAuth0();
    const handleLogOut = () => {
        logout()
    }
    const handleLogIn = () => {
        loginWithRedirect()
    }
    console.log(isAuthenticated);
    return (

        <Card className="card">
            {
                isLoading ?
                    <CircularProgress /> :
                    isAuthenticated ?
                        <Button fullWidth variant={"contained"} onClick={handleLogOut}>Logout {user.email}</Button> :
                        <Button fullWidth variant={"contained"} onClick={handleLogIn}>Login</Button>
            }
        </Card>
    )
}