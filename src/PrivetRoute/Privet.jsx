import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Form, Navigate, useLocation } from 'react-router-dom'

export default function Privet({children}) {

    const {user,loading} = useContext(AuthContext)

    const location =  useLocation

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

if(user){
    return children
}

  return (
    <Navigate to={'/login'} state={{from: location.pathname }}></Navigate>
  )
}
