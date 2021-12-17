// import { PromiseProvider } from 'mongoose'
import React, {useContext, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { UserContext } from './../context/context'


export default function ProtectedRoute(props) {

  const { token } = useContext(UserContext)

  const [target, setTarget] =useState("/") 
  
  const navigate = useNavigate()
  
  //warning asked me to add the useEffect
  useEffect(()=>{
    
    setTarget(token ? props.ifAuth : navigate('/'))

  }, [])

  console.log(props.ifAuth)
  console.log(token, typeof token)
  console.log(token? true: false)

  return (
    <div>
      {target}
    </div>
  )

}