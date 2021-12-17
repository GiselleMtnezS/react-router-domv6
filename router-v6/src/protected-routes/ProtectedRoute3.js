import {Navigate} from "react-router-dom"

export default function ProtectedRoute({children}){
    const token = children.props.token
    return token ? children : <Navigate to='/' />
}
