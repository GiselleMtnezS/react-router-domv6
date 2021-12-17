import React from "react"
import { Navigate} from "react-router-dom"

export default function protectedRoute(props){
    const {path, redirectTo, Redirect, component: C, token, ... rest} = props
 
    return (
        token? 
            <C {...rest}/> : <Navigate replace to = {redirectTo} />
        )
}
